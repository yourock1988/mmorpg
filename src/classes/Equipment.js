import Item from './Item.js'

export default class Equipment extends Item {
  constructor(caption, stats = {}, slotName, nForce2Health, nForce2Mana) {
    super(caption, true)
    this.stats = stats
    this.slotName = slotName
    this.nForce2Health = nForce2Health
    this.nForce2Mana = nForce2Mana
  }
}
