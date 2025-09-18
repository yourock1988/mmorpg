import randomId from '../functions/randomId.js'
import Coords from './Coords.js'
import EventEmitterAdapter from '../../public/EventEmitterAdapter.js'

export default class Subject extends EventEmitterAdapter {
  constructor({ x = 0, y = 0 } = {}) {
    super()
    this.id = randomId()
    this.coords = new Coords({ x, y })
  }

  transferEvent(fromObject, eventName) {
    fromObject.on(eventName, detail => this.emit(eventName, detail))
  }
}
