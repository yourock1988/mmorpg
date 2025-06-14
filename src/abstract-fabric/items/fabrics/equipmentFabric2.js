import Equipment from '../Equipment.js'
import equipmentList from '../lists/equipmentsList2.js'

export default function equipmentFabric2(caption) {
  const findedEquipment = equipmentList.find(e => e.caption === caption)
  if (!findedEquipment) throw new Error(`wrong equipment`)
  const equipment = Object.assign({}, findedEquipment)
  return new Equipment(equipment)
}
