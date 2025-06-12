export default class Target {
  #interrupt

  constructor(ownerCoords) {
    this.subject = null
    this.hasTarget = false
    this.ownerCoords = ownerCoords
    this.#interrupt = { break: false }
  }

  set(subject) {
    this.cancel()
    this.subject = subject
    this.hasTarget = true
  }

  cancel() {
    this.subject = null
    this.hasTarget = false
    this.#interrupt.break = true
    this.#interrupt = { break: false }
  }

  async goto() {
    if (!this.hasTarget) return false
    return await this.ownerCoords.moveTo(this.subject.coords, this.#interrupt)
  }

  get distance() {
    if (this.hasTarget)
      return this.ownerCoords.getDistanceTo(this.subject.coords)
  }
}
