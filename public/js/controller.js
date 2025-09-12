import { model } from './model.js'
import { view } from './view.js'

const targets = {
  elEnemy: 'enemy',
  elPlayer: 'player',
}

function handleCreatePlayer(detail) {
  model.createPlayer(detail.nickname)
  view.renderPlayerCreation()
  view.renderPlayerCoords(model.player.coords)
}

function handleTeleportPlayer(detail) {
  model.teleportPlayer(detail)
  view.renderPlayerCoords(model.player.coords)
}

function handleMovePlayer(detail) {
  model.movePlayer(detail)
}

function handleStepPlayer(modelCoords) {
  view.renderPlayerCoords(modelCoords)
}

function handleStepEnemy(modelCoords) {
  view.renderEnemyCoords(modelCoords)
}

function handleSelectTarget(targetId) {
  model.selectTarget(targets[targetId])
}

view.events.on('on-move-player', handleMovePlayer)
view.events.on('on-create-player', handleCreatePlayer)
view.events.on('on-teleport-player', handleTeleportPlayer)
view.events.on('on-select-target', handleSelectTarget)

model.events.on('on-step-enemy', handleStepEnemy)
model.events.on('on-step-player', handleStepPlayer)
