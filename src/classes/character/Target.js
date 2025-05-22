export default class Target {
  constructor(ownerCoords) {
    this.subject = null
    this.type = ''
    this.hasTarget = false
    this.ownerCoords = ownerCoords
  }

  set(target) {
    this.subject = target
    this.type = target.type
    this.hasTarget = true
  }

  cancel() {
    this.subject = null
    this.type = ''
    this.hasTarget = false
  }

  goto() {
    this.ownerCoords.moveTo(this.subject.coords)
  }

  get distance() {
    if (this.hasTarget) {
      const dx = this.ownerCoords.x - this.subject.coords.x
      const dy = this.ownerCoords.y - this.subject.coords.y
      return Math.hypot(dx, dy)
    }
  }
}
