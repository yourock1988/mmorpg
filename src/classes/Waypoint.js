import Subject from './Subject.js'

export default class Waypoint extends Subject {
  constructor(ownerTarget) {
    const { x, y } = ownerTarget.ownerCoords
    super({ x, y })
    this.ownerTarget = ownerTarget
    this.isRunning = false
  }

  async changeDirection(point) {
    // console.log('change it')
    this.isRunning = true
    this.coords.teleportTo(point)
    this.ownerTarget.set(this)
    const x = await this.ownerTarget.goto()
    // console.log('stop', x)
    this.isRunning = false
  }
}
