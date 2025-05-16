import randomId from '../../functions/randomId.js'

export default class Item {
  constructor({ caption, isCountable, count, type }) {
    this.id = randomId()
    this.caption = caption
    this.isCountable = isCountable
    this.count = count
    this.type = type ?? this.constructor.name
  }
}
