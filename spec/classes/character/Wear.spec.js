import Wear from '../../../src/classes/character/Wear.js'
import equipmentFabric from '../../../src/abstract-fabric/items/fabrics/equipmentFabric.js'

function checkStatsCalculations() {
  const wear = new Wear()
  wear.mount(equipmentFabric('Axe Of Glory'))
  wear.mount(equipmentFabric('Helmet Of Truth'))
  wear.mount(equipmentFabric('Gloves Of Monk'))

  const stats = wear.stats

  console.assert(stats.PAtk === 42 && stats.AtkSpd === 11 && stats.PDef === 55)
}

function checkStatsAfterChangeEquipment() {
  const wear = new Wear()
  wear.mount(equipmentFabric('Axe Of Glory'))
  wear.mount(equipmentFabric('Blade Of Blood'))

  const stats = wear.stats

  console.assert(stats.PAtk === 33 && stats.AtkSpd === undefined)
}

function вычисляется_ли_listActivities() {
  const wear = new Wear()

  wear.mount(equipmentFabric('Helmet Of Truth'))

  console.assert(
    wear.listActivities.length === 1 &&
      typeof wear.listActivities[0].enforce.toHealth === 'function'
  )
}

checkStatsCalculations()
checkStatsAfterChangeEquipment()
вычисляется_ли_listActivities()
