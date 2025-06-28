import activityFabric from '../activities/activityFabric.js'
import Item from './Item.js'

export default class Equipment extends Item {
  constructor({ slotName, caption, grade, stats, hasActivity }) {
    super({ caption, type: 'equipment', kind: 'single', hasActivity })
    this.slotName = slotName ?? 'weapon'
    this.grade = grade ?? 'no-grade'
    this.stats = stats ?? {}
  }

  createActivity() {
    return activityFabric(this.type, this.caption, 1n)
  }
}
