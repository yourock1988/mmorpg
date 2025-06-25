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

  async goto(gap = 1) {
    if (!this.hasTarget) return false
    if (this.distance < gap) return true
    return await this.ownerCoords.moveTo(
      this.subject.coords,
      this.#interrupt,
      gap
    )
  }

  get distance() {
    if (this.hasTarget)
      return this.ownerCoords.getDistanceTo(this.subject.coords)
  }
}
