import equipmentActivityFabric from '../../abstract-fabric/activities/fabrics/equipmentActivityFabric.js'
import randomId from '../../functions/randomId.js'
import Activity from '../Activity.js'
import Item from './Item.js'

export default class Equipment extends Item {
  constructor({ slotName, caption, grade, stats, hasActivity }) {
    super(caption, true)
    this.id = randomId()
    this.slotName = slotName ?? 'weapon'
    this.grade = grade ?? 'no-grade'
    this.stats = stats ?? {}
    this.hasActivity = hasActivity
    if (hasActivity) {
      this.activity = equipmentActivityFabric(caption)
    }
  }
}
