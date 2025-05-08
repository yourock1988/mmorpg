import Wear from '../../../src/classes/character/Wear.js'
import listEquipment from '../../../src/lists/listEquipment.js'

function checkStatsCalculations() {
  const wear = new Wear()
  wear.mount(listEquipment[0])
  wear.mount(listEquipment[2])
  wear.mount(listEquipment[3])

  const stats = wear.stats

  console.assert(
    stats.PAtk === 42n && stats.AtkSpd === 11n && stats.PDef === 55n
  )
}

function checkStatsAfterChangeEquipment() {
  const wear = new Wear()
  wear.mount(listEquipment[0])
  wear.mount(listEquipment[1])

  const stats = wear.stats

  console.assert(stats.PAtk === 33n && stats.AtkSpd === undefined)
}

function вычисляются_ли_нфорсы() {
  const wear = new Wear()
  wear.mount(listEquipment[2])

  console.assert(
    wear.nForces2Health.length === 1 &&
      typeof wear.nForces2Health[0] === 'function'
  )
}

вычисляются_ли_нфорсы()
checkStatsCalculations()
checkStatsAfterChangeEquipment()
