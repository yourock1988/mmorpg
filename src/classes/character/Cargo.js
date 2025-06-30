export default class Cargo {
  constructor(activities) {
    this.items = []
    this.activities = activities
  }

  consumeItem(item) {
    if (item.type !== 'consumable') return
    const activity = item.createActivity()
    this.activities.add(activity)
    this.removeItemById(item.id)
  }

  get groupedItems() {
    const groupFn = item => (item.kind === 'groupable' ? item.caption : item.id)
    const groupedItems = Map.groupBy(this.items, groupFn)
    return [...groupedItems.entries()].map(([_, val]) => val)
  }

  addItem(item) {
    if (this.findItemById(item.id)) throw new Error('added item clone')
    if (item.kind === 'countable') {
      const findedItem = this.findItemByCaption(item.caption)
      if (findedItem) {
        findedItem.count += item.count
        return
      }
    }
    this.items.push(item)
  }

  findItemByCaption(caption) {
    return this.items.find(item => item.caption === caption)
  }

  findItemById(id) {
    return this.items.find(item => item.id === id)
  }

  removeItemById(id) {
    const idx = this.items.findIndex(item => item.id === id)
    if (idx > -1) this.items.splice(idx, 1)
  }

  dropItemById(id, count = 1) {
    let findedItem = this.findItemById(id)
    if (!findedItem) return null
    if (findedItem.kind === 'countable') {
      return findedItem.drop(count)
    }
    this.removeItemById(id)
    return findedItem
  }
}
