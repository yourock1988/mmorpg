// куски барахла
import Item from './Item.js'

export default class Piece extends Item {
  constructor({ caption, hasActivity }) {
    super({ caption, type: 'piece', kind: 'groupable', hasActivity })
  }
}
