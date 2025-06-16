import Consumable from '../../abstract-fabric/items/Consumable.js'

export default class Cargo {
  constructor(activities) {
    this.items = []
    this.activities = activities
  }

  consumeItem(item) {
    if (!(item instanceof Consumable)) return
    this.activities.add(item.activity)
    this.removeItemById(item.id)
  }

  get groupedItems() {
    const groupFn = item => (item.isCountable ? item.caption : item.id)
    const groupedItems = Object.groupBy(this.items, groupFn)
    return Object.entries(groupedItems).map(([_, val]) => val)
  }

  addItem(item) {
    if (this.findItemById(item.id)) throw new Error('added item clone')
    this.items.push(item)
  }

  findItemById(id) {
    return this.items.find(item => item.id === id)
  }

  removeItemById(id) {
    const idx = this.items.findIndex(item => item.id === id)
    this.items.splice(idx, 1)
  }
}
