import Player from '../../src/classes/creatures/Player.js'
import EventEmitterAdapter from '../EventEmitterAdapter.js'

const model = {
  events: new EventEmitterAdapter(),

  player: null,

  enemy: new Player('Enemy', 'Orc', 'Fighter'),

  createPlayer(nickname) {
    this.player = new Player(nickname, 'Orc', 'Fighter')
    this.enemy.coords.teleportTo({ x: 300, y: 500 })
    this.enemy.target.set(this.player)
    // this.enemy.target.goto()
    window.setInterval(() => {
      model.events.emit('on-step-enemy', this.enemy.coords)
    }, 10)
    this.player.coords.events.on('on-step-player', () => {
      model.events.emit('on-step-player', this.player.coords)
    })
  },

  teleportPlayer(coords) {
    this.player.coords.teleportTo(coords)
  },

  movePlayer(coords) {
    this.player.waypoint.changeDirection(coords)
  },

  goEnemy() {},

  selectTarget(targetName) {
    // console.log(this.player.target.subject)
    // console.log(this[targetName])
    if (this.player.target.subject === this[targetName]) {
      this.player.target.goto(40)
    } else {
      this.player.target.set(this[targetName])
    }
  },
}

export { model }
