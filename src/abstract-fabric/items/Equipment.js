import activityFabric from '../activities/activityFabric.js'
import Item from './Item.js'

export default class Equipment extends Item {
  constructor({ slotName, caption, grade, stats, hasActivity }) {
    super({ caption })
    this.slotName = slotName ?? 'weapon'
    this.grade = grade ?? 'no-grade'
    this.stats = stats ?? {}
    this.hasActivity = hasActivity
    if (hasActivity) {
      this.activity = activityFabric('equipment', caption, 1n)
    }
  }
}
