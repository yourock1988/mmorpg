import randomId from '../functions/randomId.js'
import Coords from './Coords.js'

export default class Subject {
  constructor({ x = 0, y = 0 } = {}) {
    this.id = randomId()
    this.coords = new Coords({ x, y })
  }
}
