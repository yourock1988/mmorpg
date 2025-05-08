import Equipment from '../Equipment.js'
import Cargo from './Cargo.js'
import Wear from './Wear.js'

export default class Inventory {
  constructor() {
    this.wear = new Wear()
    this.cargo = new Cargo()
  }

  wearItemById(id) {
    const item = this.cargo.findItemById(id)
    if (item instanceof Equipment) {
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
