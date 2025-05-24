import wait from '../../functions/wait.js'
import distance from '../../functions/distance.js'

export default class Coords {
  constructor() {
    this.x = 0
    this.y = 0
  }

  teleportTo(coords) {
    this.x = coords.x
    this.y = coords.y
  }

  async moveTo(target) {
    return await Promise.race([wait(1400), target.promise])

    // while (target.hasTarget && distance(this, target.subject.coords) > 9) {
    //   await this.step(subject.coords)
    // }
    // return true
    // target.resolve(true)
  }

  async step(targetCoords) {
    //
  }

  stop() {
    //
  }
}
