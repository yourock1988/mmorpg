import wait from '../../functions/wait.js'
import calcStep from '../../functions/calcStep.js'
import calcDistance from '../../functions/calcDistance.js'
import { round } from '../../functions/utils.js'

export default class Coords {
  #interrupt

  constructor() {
    this.x = 0
    this.y = 0
    this.#interrupt = { break: false }
  }

  teleportTo(coords) {
    this.stop()
    this.x = coords.x
    this.y = coords.y
  }

  async moveTo(coords, interrupt = { break: false }, gap = 1) {
    this.#interrupt.break = true
    this.#interrupt = interrupt
    while ((await this.stepTo(coords)) > gap) if (interrupt.break) return false
    return true
  }

  async stepTo(coords) {
    await wait(100)
    Object.assign(this, calcStep(this, coords, 88))
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
