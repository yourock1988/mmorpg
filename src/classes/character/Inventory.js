import Cargo from './Cargo.js'
import Wear from './Wear.js'

export default class Inventory {
  constructor(activities) {
    this.wear = new Wear(activities)
    this.cargo = new Cargo(activities)
  }

  wearItemById(id) {
    const item = this.cargo.findItemById(id)
    if (item.type === 'equipment') {
      this.cargo.removeItemById(id)
      const oldEquipment = this.wear.mount(item)
      if (oldEquipment) this.cargo.addItem(oldEquipment)
    }
  }

  unwearItemBySlotName(slotName) {
    const oldEquipment = this.wear.umountBySlotName(slotName)
    if (oldEquipment) this.cargo.addItem(oldEquipment)
  }
}
