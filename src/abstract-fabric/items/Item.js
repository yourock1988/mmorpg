import randomId from '../../functions/randomId.js'
import activityFabric from '../activities/activityFabric.js'
import itemFabric from './fabrics/itemFabric.js'

export default class Item {
  constructor({ type, kind, caption, hasActivity, content }) {
    this.id = randomId()
    this.type = type
    this.kind = kind // single|groupable|countable
    this.caption = caption
    this.hasActivity = hasActivity
    Object.assign(this, content)
  }

  createActivity() {
    if (this.hasActivity) return activityFabric(this.type, this.caption, 1n)
  }

  drop(count) {
    if (this.kind !== 'countable') return
    if (count > 0 && this.count - count >= 0) {
      this.count -= count
      return itemFabric(this.type, this.caption, count)
    }
    return null
  }
}
