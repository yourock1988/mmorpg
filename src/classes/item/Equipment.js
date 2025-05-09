import randomId from '../../functions/randomId.js'
import Activity from '../Activity.js'
import Item from './Item.js'

export default class Equipment2 extends Item {
  constructor({ slotName, caption, grade, stats, enforce }) {
    super(caption, true)
    this.id = randomId()
    this.slotName = slotName ?? 'weapon'
    this.grade = grade ?? 'no-grade'
    this.stats = stats ?? {}
    // this.enforce = enforce ?? {}
    if (enforce) {
      this.activity = new Activity({
        type: `equipmentAura`,
        caption: `force-of-${caption}`,
        enforce,
      })
    }
  }
}
