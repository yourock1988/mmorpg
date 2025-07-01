import randomId from '../../functions/randomId.js'
import activityFabric from '../activities/activityFabric.js'
import abilityDefaultConfigs from './abilityDefaultConfigs.js'

export default class Ability {
  constructor({ type, caption, level, cost, config }) {
    this.id = randomId()
    this.caption = caption
    this.level = BigInt(level) //! говнокостыль из-за отсутсвия BigInt в json
    this.type = type
    this.cost = cost
    this.cost.sp = BigInt(this.cost.sp) //! говнокостыль из-за отсутсвия BigInt в json
    this.config = { ...abilityDefaultConfigs[type + 's'], ...config }
    this.status = { cooldownCurrent: 0, cdAwaiter: Promise.resolve() }
    this.desc = this.createActivity().desc
  }

  createActivity() {
    return activityFabric(this.type, this.caption, this.level)
  }
}
