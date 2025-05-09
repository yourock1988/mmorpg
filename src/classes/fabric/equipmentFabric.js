import equipmentList from '../../lists/equipmentList.js'
import Equipment from '../item/Equipment.js'

export default function equipmentFabric(caption) {
  const equipment = equipmentList.find(e => e.caption === caption)
  return new Equipment(equipment)
}
