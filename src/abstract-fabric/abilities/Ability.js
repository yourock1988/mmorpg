import randomId from '../../functions/randomId.js'
import activityFabric from '../activities/activityFabric.js'

export default class Ability {
  constructor({ type, caption, level, cost, config }) {
    this.id = randomId()
    this.caption = caption
    this.level = level
    this.type = type
    this.cost = cost
    this.config = config
    this.status = {
      cooldownCurrent: 0,
    }
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
    return activityFabric(this.type, this.caption, this.level)
  }
}
