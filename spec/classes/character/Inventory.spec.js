import Inventory from '../../../src/classes/character/Inventory.js'
import equipmentFabric from '../../../src/classes/fabric/equipmentFabric.js'

function tryToWearEquipment() {
  const inventory = new Inventory()
  inventory.cargo.addItem(equipmentFabric('Axe Of Glory'))
  inventory.cargo.addItem(equipmentFabric('Helmet Of Truth'))
  inventory.cargo.addItem(equipmentFabric('Gloves Of Monk'))
  const idToWear0 = inventory.cargo.items[0].id
  const idToWear2 = inventory.cargo.items[1].id
  const idToWear3 = inventory.cargo.items[2].id

  inventory.wearItemById(idToWear0)
  inventory.wearItemById(idToWear2)
  inventory.wearItemById(idToWear3)

  console.assert(
    inventory.wear.stats.PAtk === 42n &&
      inventory.wear.stats.AtkSpd === 11n &&
      inventory.wear.stats.PDef === 55n &&
      inventory.cargo.items.length === 0
  )
}

function tryToUnwearEquipment() {
  const inventory = new Inventory()
  inventory.cargo.addItem(equipmentFabric('Axe Of Glory'))
  inventory.cargo.addItem(equipmentFabric('Helmet Of Truth'))
  inventory.cargo.addItem(equipmentFabric('Gloves Of Monk'))
  const idToWear0 = inventory.cargo.items[0].id
  const idToWear2 = inventory.cargo.items[1].id
  const idToWear3 = inventory.cargo.items[2].id

  inventory.wearItemById(idToWear0)
  inventory.wearItemById(idToWear2)
  inventory.wearItemById(idToWear3)

  inventory.unwearItemBySlotName('weapon')

  console.assert(
    inventory.wear.stats.PDef === 55n && inventory.cargo.items.length === 1
  )
}

function tryToChangeWearEquipment() {
  const inventory = new Inventory()
  inventory.cargo.addItem(equipmentFabric('Axe Of Glory'))
  inventory.cargo.addItem(equipmentFabric('Blade Of Blood'))
  inventory.cargo.addItem(equipmentFabric('Helmet Of Truth'))
  inventory.cargo.addItem(equipmentFabric('Gloves Of Monk'))
  const idToWear0 = inventory.cargo.items[0].id
  const idToWear1 = inventory.cargo.items[1].id
  const idToWear2 = inventory.cargo.items[2].id
  const idToWear3 = inventory.cargo.items[3].id

  inventory.wearItemById(idToWear0)
  inventory.wearItemById(idToWear2)
  inventory.wearItemById(idToWear3)

  inventory.wearItemById(idToWear1)

  console.assert(
    inventory.wear.stats.PAtk === 33n &&
      inventory.wear.stats.PDef === 55n &&
      inventory.cargo.items.length === 1
  )
}

tryToWearEquipment()
tryToUnwearEquipment()
tryToChangeWearEquipment()
