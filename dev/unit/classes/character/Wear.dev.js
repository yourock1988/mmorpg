import Wear from '../../../../src/classes/character/Wear.js'
import itemFabric from '../../../../src/abstract-fabric/items/itemFabric.js'

function checkStatsCalculations() {
  const wear = new Wear()
  wear.mount(itemFabric('equipment', 'Axe Of Glory'))
  wear.mount(itemFabric('equipment', 'Helmet Of Truth'))
  wear.mount(itemFabric('equipment', 'Gloves Of Monk'))

  const stats = wear.stats

  console.assert(stats.PAtk === 42 && stats.AtkSpd === 11 && stats.PDef === 55)
}

function checkStatsAfterChangeEquipment() {
  const wear = new Wear()
  wear.mount(itemFabric('equipment', 'Axe Of Glory'))
  wear.mount(itemFabric('equipment', 'Blade Of Blood'))

  const stats = wear.stats

  console.assert(stats.PAtk === 33 && stats.AtkSpd === undefined)
}

// function вычисляется_ли_listActivities() {
//   const wear = new Wear()

//   wear.mount(itemFabric('equipment', 'Helmet Of Truth'))

//   console.assert(
//     wear.listActivities.length === 1 &&
//       typeof wear.listActivities[0].enforce.toHealth === 'function'
//   )
// }

checkStatsCalculations()
checkStatsAfterChangeEquipment()
// вычисляется_ли_listActivities()
