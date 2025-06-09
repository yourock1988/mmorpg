import equipmentActivityFabric from '../activities/fabrics/equipmentActivityFabric.js'
import Item from './Item.js'

export default class Equipment extends Item {
  constructor({ slotName, caption, grade, stats, hasActivity }) {
    super(caption, true)
    this.slotName = slotName ?? 'weapon'
    this.grade = grade ?? 'no-grade'
    this.stats = stats ?? {}
    this.hasActivity = hasActivity
    if (hasActivity) {
      this.activity = equipmentActivityFabric(caption, 1n)
    }
  }
}
