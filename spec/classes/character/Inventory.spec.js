import Activities from '../../../src/classes/character/Activities.js'
import Health from '../../../src/classes/character/Health.js'
import Inventory from '../../../src/classes/character/Inventory.js'
import equipmentFabric from '../../../src/abstract-fabric/items/fabrics/equipmentFabric.js'
import Leveler from '../../../src/classes/character/Leveler.js'

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
    inventory.wear.stats.PAtk === 42 &&
      inventory.wear.stats.AtkSpd === 11 &&
      inventory.wear.stats.PDef === 55 &&
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
    inventory.wear.stats.PDef === 55 && inventory.cargo.items.length === 1
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
    inventory.wear.stats.PAtk === 33 &&
      inventory.wear.stats.PDef === 55 &&
      inventory.cargo.items.length === 1
  )
}

function проверка_пульсирования_при_надетом_шлеме() {
  const stats = { current: { hpTotal: 430, hpRegen: 4.3, mpTotal: 130 } }
  const leveler = new Leveler()
  const activities = new Activities()
  const inventory = new Inventory(activities)
  const health = new Health(stats, leveler, activities)
  const equipment = equipmentFabric('Helmet Of Truth')
  let oldHpTotal = health.total
  let oldHpCurrent = health.current
  inventory.cargo.addItem(equipment)
  inventory.wearItemById(equipment.id)

  console.assert(health.current === oldHpCurrent)
  const intervalId = setInterval(() => {
    console.assert(health.total > oldHpTotal)
    console.assert(health.current > oldHpCurrent)
    oldHpCurrent = health.current
  }, equipment.activity.config.pulseIntervalDelay + 33)

  setTimeout(() => {
    clearInterval(intervalId)
    inventory.unwearItemBySlotName('helmet')
    activities.removeAll()
  }, 2000)
}

tryToWearEquipment()
tryToUnwearEquipment()
tryToChangeWearEquipment()
проверка_пульсирования_при_надетом_шлеме()
