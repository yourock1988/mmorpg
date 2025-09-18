import wait from '../functions/wait.js'
import calcStep from '../functions/calcStep.js'
import calcDistance from '../functions/calcDistance.js'
import { round } from '../functions/utils.js'
import EventEmitterAdapter from '../../public/EventEmitterAdapter.js'

export default class Coords extends EventEmitterAdapter {
  #interrupt

  constructor({ x = 0, y = 0 } = {}) {
    super()
    this.x = x
    this.y = y
    this.#interrupt = { break: false }
  }

  teleportTo(point) {
    this.stop()
    this.x = point.x
    this.y = point.y
    this.emit('CL.PLAYER.TELEPORTED', { x: this.x, y: this.y })
  }

  async moveTo(point, interrupt = { break: false }, gap = 1) {
    this.#interrupt.break = true
    this.#interrupt = interrupt
    while (this.stepTo(point) > gap) {
      await wait(10)
      if (interrupt.break) return false
    }
    return true
  }

  stepTo(point) {
    Object.assign(this, calcStep(this, point, 88))
    this.emit('CL.PLAYER.STEP', { x: this.x, y: this.y })
    return this.getDistanceTo(point)
  }

  stop() {
    this.#interrupt.break = true
    this.#interrupt = { break: false }
  }

  getDistanceTo(point) {
    return round(calcDistance(this, point))
  }
}
