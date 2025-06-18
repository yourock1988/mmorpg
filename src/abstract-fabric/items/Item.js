import randomId from '../../functions/randomId.js'

export default class Item {
  constructor({ type, kind, caption, hasActivity }) {
    this.id = randomId()
    this.type = type ?? 'item'
    this.kind = kind // single|groupable|countable
    this.caption = caption
    this.hasActivity = hasActivity
  }
}
