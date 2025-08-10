import Activities from '../../../../src/classes/character/Activities.js'
import Health from '../../../../src/classes/character/Health.js'
import Inventory from '../../../../src/classes/character/Inventory.js'
import Leveler from '../../../../src/classes/character/Leveler.js'
import statsBasic from '../../../../src/dicts/statsBasic.js'
import Coords from '../../../../src/classes/Coords.js'
import Target from '../../../../src/classes/character/Target.js'
import Wear from '../../../../src/classes/character/Wear.js'
import StatsCombat from '../../../../src/classes/character/StatsCombat.js'
import itemFabric from '../../../../src/abstract-fabric/items/itemFabric.js'

function tryToWearEquipment() {
  const inventory = new Inventory()
  inventory.cargo.addItem(itemFabric('equipment', 'Axe Of Glory'))
  inventory.cargo.addItem(itemFabric('equipment', 'Helmet Of Truth'))
  inventory.cargo.addItem(itemFabric('equipment', 'Gloves Of Monk'))
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
  inventory.cargo.addItem(itemFabric('equipment', 'Axe Of Glory'))
  inventory.cargo.addItem(itemFabric('equipment', 'Helmet Of Truth'))
  inventory.cargo.addItem(itemFabric('equipment', 'Gloves Of Monk'))
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
  inventory.cargo.addItem(itemFabric('equipment', 'Axe Of Glory'))
  inventory.cargo.addItem(itemFabric('equipment', 'Blade Of Blood'))
  inventory.cargo.addItem(itemFabric('equipment', 'Helmet Of Truth'))
  inventory.cargo.addItem(itemFabric('equipment', 'Gloves Of Monk'))
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
  const sb = { ...statsBasic.Orc.Fighter }
  const leveler = new Leveler()
  const coords = new Coords()
  const target = new Target(coords)
  const activities = new Activities()
  const wear = new Wear(activities)
  const statsCombat = new StatsCombat(sb, leveler, wear, activities)
  const inventory = new Inventory(activities)
  const health = new Health(statsCombat, leveler, activities)
  const equipment = itemFabric('equipment', 'Helmet Of Truth')
  let oldHpTotal = health.total
  let oldHpCurrent = health.current
  inventory.cargo.addItem(equipment)
  inventory.wearItemById(equipment.id)

  console.assert(health.current === oldHpCurrent)
  const intervalId = setInterval(() => {
    console.assert(health.total > oldHpTotal)
    console.assert(health.current > oldHpCurrent)
    oldHpCurrent = health.current
  }, equipment.createActivity().config.pulseIntervalDelay + 33)

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
