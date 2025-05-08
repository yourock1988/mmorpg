import randomId from '../../functions/randomId.js'

export default class Cargo {
  constructor() {
    this.items = []
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
