import Player from '../../src/classes/creatures/Player.js'
import EventEmitterAdapter from '../EventEmitterAdapter.js'

const model = {
  events: new EventEmitterAdapter(),

  player: null,

  enemy: new Player('Enemy', 'Orc', 'Fighter'),

  createPlayer(nickname) {
    this.player = new Player(nickname, 'Orc', 'Fighter')
    this.player.leveler.forceSetLevel(15n)
    this.enemy.coords.teleportTo({ x: 100, y: 100 })
    this.enemy.target.set(this.player)
    // this.enemy.target.goto()
    this.enemy.on('CL_PLAYER_DIED', () => console.log('BAR!!!!!!'))
    // window.setInterval(() => {
    //   model.events.emit('on-step-enemy', this.enemy.coords)
    // }, 10)
    model.events.emit('on-step-enemy', this.enemy.coords)
    this.player.coords.events.on('on-step-player', () => {
      model.events.emit('on-step-player', this.player.coords)
    })
  },
}

export { model }
