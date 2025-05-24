import distance from '../../functions/distance.js'

export default class Target {
  constructor(ownerCoords) {
    this.subject = null
    this.hasTarget = false
    this.ownerCoords = ownerCoords
    Object.assign(this, Promise.withResolvers())
  }

  set(subject) {
    this.cancel()
    this.subject = subject
    this.hasTarget = true
    Object.assign(this, Promise.withResolvers())
  }

  cancel() {
    this.subject = null
    this.hasTarget = false
    this.resolve(false)
  }

  async goto() {
    if (!this.hasTarget) return false
    return await this.ownerCoords.moveTo(this)
  }

  get distance() {
    if (this.hasTarget) return distance(this.ownerCoords, this.subject.coords)
  }
}
