import randomId from '../functions/randomId.js'
import Coords from './Coords.js'

export default class Subject {
  constructor() {
    this.id = randomId()
    this.coords = new Coords()
  }
}
