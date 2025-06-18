import Consumable from '../Consumable.js'
import consumablesList from '../lists/consumablesList.js'

export default function consumableFabric(caption) {
  const findedItem = consumablesList.find(e => e.caption === caption)
  if (!findedItem) throw new Error(`wrong consumable`)
  const item = Object.assign({}, findedItem)
  return new Consumable(item)
}
