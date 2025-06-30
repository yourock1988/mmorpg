import Item from '../Item.js'
import itemDict from '../itemDict.js'

export default function itemFabric(type, caption, count) {
  const itemsList = itemDict[type + 's']
  if (!itemsList) throw new Error(`wrong item type ${type}`)
  const findedItem = itemsList.find(e => e.caption === caption)
  const itemClone = structuredClone(findedItem)
  Object.assign(itemClone, { type })
  if (count) Object.assign(itemClone, { content: { count } })
  return new Item(itemClone)
}
