import { model } from './model.js'
import { view } from './view.js'

const targets = {
  elEnemy: 'enemy',
  elPlayer: 'player',
}

function handleMovePlayer(point) {
  model.player.walkToPoint(point)
}
function handleSelectTarget(targetId) {
  model.player.selectTarget(model[targets[targetId]])
}
function handleTeleportPlayer(point) {
  model.player.teleportToPoint(point)
  view.renderPlayerCoords(model.player.coords)
}

function handleCreatePlayer(detail) {
  model.createPlayer(detail.nickname)
  view.renderPlayerCreation()
  view.renderPlayerCoords(model.player.coords)
}

function handleDieEnemy() {
  view.renderEnemyIsAlive(false)
}
function handleStepEnemy(modelCoords) {
  view.renderEnemyCoords(modelCoords)
}
function handleStepPlayer(modelCoords) {
  view.renderPlayerCoords(modelCoords)
}

view.events.on('on-move-player', handleMovePlayer)
view.events.on('on-select-target', handleSelectTarget)
view.events.on('on-create-player', handleCreatePlayer)
view.events.on('on-teleport-player', handleTeleportPlayer)

model.enemy.on('CL_PLAYER_DIED', handleDieEnemy)
model.events.on('on-step-enemy', handleStepEnemy)
model.events.on('on-step-player', handleStepPlayer)
