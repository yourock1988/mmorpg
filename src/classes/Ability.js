import persistActivityFabric from '../activities/fabrics/persistActivityFabric.js'
import randomId from '../functions/randomId.js'

export default class Ability {
  constructor({ caption, level, cost, type, handling }) {
    this.id = randomId()
    this.caption = caption
    this.level = level
    this.type = type
    this.cost = cost
    this.activity = persistActivityFabric(caption, level)
    // Object.assign(this, handling)
  }

  castToTarget(target) {
    target.debuffs.push(this.activity)
  }
}
