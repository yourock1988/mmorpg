import itemDict from '../abstract-fabric/items/itemDict.js'
import itemFabric from '../abstract-fabric/items/itemFabric.js'

export default class Shop {
  constructor(character) {
    this.character = character
  }

  get availableItems() {
    const types = ['consumables', 'equipments']
    return types
      .flatMap(type =>
        itemDict[type].map(item => ({ ...item, type: type.slice(0, -1) }))
      )
      .filter(eq => eq.cost)
  }

  buy(type, caption) {
    const predicate = ai => ai.caption === caption && ai.type === type
    if (!this.availableItems.find(predicate)) return
    const item = itemFabric(type, caption)
    const { cargo } = this.character.inventory
    const payment = cargo.dropItemByCaption('Money', item.cost.money)
    if (payment) cargo.addItem(item)
    // else console.log('не хватает денег')
  }
}
