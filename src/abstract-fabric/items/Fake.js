// or Dummy item
// итем, который является производной от каких-то данных.
// например от адены или античной адены.
// так же можно будет дропать например своё здоровье или ману.
// (здоровье и мана будут иметь отображение в инвентаре)

import fakeFabric from './fabrics/fakeFabric.js'
import Item from './Item.js'

export default class Fake extends Item {
  constructor({ caption, count }) {
    super({ caption, type: 'fake', kind: 'countable', hasActivity: false })
    this.count = count ?? 0
  }

  drop(count) {
    if (count > 0 && this.count - count >= 0) {
      this.count -= count
      return itemFabric('fake', this.caption, count)
    }
    return null
  }
}
