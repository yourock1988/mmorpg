import randomId from '../../functions/randomId.js'

export default class Item {
  constructor(caption, isCountable = false, count) {
    this.id = randomId()
    this.caption = caption
    this.itemType = this.constructor.name
    this.isCountable = isCountable
    this.count = count
  }
}
