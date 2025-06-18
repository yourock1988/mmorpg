import Equipment from '../Equipment.js'
import equipmentList from '../lists/equipmentsList.js'

export default function equipmentFabric(caption) {
  const findedItem = equipmentList.find(e => e.caption === caption)
  if (!findedItem) throw new Error(`wrong equipment`)
  const equipment = Object.assign({}, findedItem)
  return new Equipment(equipment)
}
