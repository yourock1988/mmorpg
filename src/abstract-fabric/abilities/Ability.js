import auraActivityFabric from '../activities/fabrics/auraActivityFabric.js'
import persistActivityFabric from '../activities/fabrics/persistActivityFabric.js'
import randomId from '../../functions/randomId.js'

export default class Ability {
  constructor({ type, caption, level, config, cost }) {
    this.id = randomId()
    this.caption = caption
    this.level = level
    this.type = type
    this.config = config
    this.cost = cost
    switch (type) {
      case 'persist':
        this.activity = persistActivityFabric(caption, level)
        break
      case 'aura':
        this.activity = auraActivityFabric(caption, level)
        break
    }
    this.desc = this.activity.desc
  }

  castToTarget(target) {
    target.debuffs.push(this.activity)
  }
}
