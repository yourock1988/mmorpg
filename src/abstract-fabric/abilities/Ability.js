import randomId from '../../functions/randomId.js'
import activityFabric from '../activities/activityFabric.js'
import abilityDefaultConfigs from './abilityDefaultConfigs.js'

export default class Ability {
  constructor({ type, caption, level, cost, config }) {
    this.id = randomId()
    this.caption = caption
    this.level = level
    this.type = type
    this.cost = cost
    this.config = { ...abilityDefaultConfigs[type + 's'], ...config }
    this.status = { cooldownCurrent: 0 }
    this.desc = this.createActivity().desc
  }

  createActivity() {
    return activityFabric(this.type, this.caption, this.level)
  }
}
