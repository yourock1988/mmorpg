import Player from '../../src/classes/creatures/Player.js'
import EventEmitterAdapter from '../EventEmitterAdapter.js'

const model = {
  events: new EventEmitterAdapter(),

  characters: [],

  get currentPlayer() {
    return this.characters[0]
  },

  player: new Player('Player', 'Orc', 'Fighter'),

  enemy: new Player('Enemy', 'Orc', 'Fighter'),
}

export { model }
