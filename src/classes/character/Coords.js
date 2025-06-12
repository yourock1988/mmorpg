import wait from '../../functions/wait.js'
import step from '../../functions/step.js'
import distance from '../../functions/distance.js'

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

  async moveTo(coords, interrupt = { break: false }) {
    this.#interrupt.break = true
    this.#interrupt = interrupt
    while (await this.stepTo(coords)) if (interrupt.break) return false
    return true
  }

  async stepTo(coords) {
    await wait(100)
    Object.assign(this, step(this, coords, 88))
    return this.getDistanceTo(coords) > 1
  }

  stop() {
    this.#interrupt.break = true
    this.#interrupt = { break: false }
  }

  getDistanceTo(coords) {
    return +distance(this, coords).toFixed(2)
  }
}
