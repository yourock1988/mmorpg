import activityFabric from '../activities/activityFabric.js'
import Item from './Item.js'

export default class Consumable extends Item {
  constructor({ caption, hasActivity }) {
    super({ caption, type: 'consumable', kind: 'groupable', hasActivity })
    if (hasActivity) {
      this.activity = activityFabric('consumable', caption, 1n)
    }
  }
}
