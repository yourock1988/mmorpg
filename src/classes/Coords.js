import wait from '../functions/wait.js'
import calcStep from '../functions/calcStep.js'
import calcDistance from '../functions/calcDistance.js'
import { round } from '../functions/utils.js'
import EventEmitterAdapter from '../../x/EventEmitterAdapter.js'

export default class Coords {
  #interrupt

  constructor({ x = 0, y = 0 } = {}) {
    this.x = x
    this.y = y
    this.#interrupt = { break: false }
    this.events = new EventEmitterAdapter()
  }

  teleportTo(coords) {
    this.stop()
    this.x = coords.x
    this.y = coords.y
  }

  async moveTo(coords, interrupt = { break: false }, gap = 1) {
    this.#interrupt.break = true
    this.#interrupt = interrupt
    while (this.stepTo(coords) > gap) {
      await wait(100)
      if (interrupt.break) return false
    }
    return true
  }

  stepTo(coords) {
    Object.assign(this, calcStep(this, coords, 88))
    this.events.emit('on-player-step', { x: this.x, y: this.y })
    return this.getDistanceTo(coords)
  }

  stop() {
    this.#interrupt.break = true
    this.#interrupt = { break: false }
  }

  getDistanceTo(coords) {
    return round(calcDistance(this, coords))
  }
}
