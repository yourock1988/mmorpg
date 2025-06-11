import randomId from '../../functions/randomId.js'
import auraActivityFabric from '../activities/fabrics/auraActivityFabric.js'
import buffActivityFabric from '../activities/fabrics/buffActivityFabric.js'
import debuffActivityFabric from '../activities/fabrics/debuffActivityFabric.js'
import persistActivityFabric from '../activities/fabrics/persistActivityFabric.js'

export default class Ability {
  constructor({ type, caption, level, cost, config, status }) {
    this.id = randomId()
    this.caption = caption
    this.level = level
    this.type = type
    this.cost = cost
    this.config = config
    this.status = status
    this.desc = this.createActivity().desc
  }

  // cast(targetActivities) {
  //   // console.log('A')
  //   // if (!this.status.canStartCast) return
  //   // console.log('B')
  //   const activity = this.createActivity()
  //   targetActivities.add(activity)
  // }

  // get status_canStartCast() {
  //   if (this.config.isRequiresTarget && !this.target) return
  // }

  createActivity() {
    switch (this.type) {
      case 'persist':
        return persistActivityFabric(this.caption, this.level)
      case 'aura':
        return auraActivityFabric(this.caption, this.level)
      case 'buff':
        return buffActivityFabric(this.caption, this.level)
      case 'debuff':
        return debuffActivityFabric(this.caption, this.level)
    }
  }
}
