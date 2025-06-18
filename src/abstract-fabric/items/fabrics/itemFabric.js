import Item from '../Item.js'
import itemsList from '../lists/itemsList.js'

export default function itemFabric(caption) {
  const findedItem = itemsList.find(e => e.caption === caption)
  if (!findedItem) throw new Error(`wrong item`)
  const item = Object.assign({}, findedItem)
  return new Item(item)
}
