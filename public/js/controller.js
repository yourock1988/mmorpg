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
}

function handleCreatePlayer(detail) {
  model.createPlayer(detail.nickname)
}

function handleDieEnemy() {
  view.renderEnemyIsAlive(false)
}
function handleStepEnemy(point) {
  view.renderEnemyPoint(point)
}
function handleStepPlayer(point) {
  view.renderPlayerPoint(point)
}

view.events.on('UI.PLAYER.CREATE', handleCreatePlayer)

view.events.on('UI.PLAYER.WALK', handleMovePlayer)
view.events.on('UI.PLAYER.SELECTED', handleSelectTarget)
view.events.on('UI.PLAYER.TELEPORTED', handleTeleportPlayer)

model.enemy.on('CL.PLAYER.DIED', handleDieEnemy)
model.enemy.on('CL.PLAYER.TELEPORTED', handleStepEnemy)
model.player.on('CL.PLAYER.TELEPORTED', handleStepPlayer)
model.player.on('CL.PLAYER.STEP', handleStepPlayer)

//

model.player.leveler.forceSetLevel(15n)
model.player.coords.teleportTo({ x: 0, y: 0 })
model.enemy.coords.teleportTo({ x: 100, y: 100 })
