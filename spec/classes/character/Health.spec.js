import abilityFabric from '../../../src/abstract-fabric/abilities/abilityFabric.js'
import equipmentFabric from '../../../src/abstract-fabric/items/fabrics/equipmentFabric.js'
import Abilities from '../../../src/classes/character/Abilities.js'
import Activities from '../../../src/classes/character/Activities.js'
import Coords from '../../../src/classes/character/Coords.js'
import Health from '../../../src/classes/character/Health.js'
import Inventory from '../../../src/classes/character/Inventory.js'
import Leveler from '../../../src/classes/character/Leveler.js'
import Mana from '../../../src/classes/character/Mana.js'
import StatsCombat from '../../../src/classes/character/StatsCombat.js'
import Target from '../../../src/classes/character/Target.js'
import Wear from '../../../src/classes/character/Wear.js'
import sb from '../../../src/dicts/statsBasic.js'

function умрёт_ли_без_здоровья() {
  const stats = { current: { hpTotal: 430 } }
  const leveler = new Leveler()
  const activities = new Activities()
  const health = new Health(stats, leveler, activities)
  const oldHPtotal = health.total

  health.forceDeath()

  console.assert(
    health.total === oldHPtotal &&
      health.current === 0 &&
      health.isLive === false
  )
}
function повышается_ли_здоровье_при_увеличении_CON() {
  const stats = { current: { hpTotal: 430 } }
  const leveler = new Leveler()
  const activities = new Activities()
  const health = new Health(stats, leveler, activities)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  stats.current.hpTotal += 50

  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)
}
function повышается_ли_здоровье_при_левелапе() {
  const activities = new Activities()
  const statsBasic = sb.Orc.Fighter
  const leveler = new Leveler()
  const wear = new Wear(activities)
  const statsCombat = new StatsCombat(statsBasic, leveler, wear, activities)
  const health = new Health(statsCombat, leveler, activities)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  leveler.forceLevelUp()

  console.assert(health.total > oldHPtotal && health.current > oldHPcurrent)
}
async function повышается_ли_здоровье_при_персисте() {
  const stats = { current: { hpTotal: 430, mpTotal: 130 } }
  const leveler = new Leveler()
  const coords = new Coords()
  const target = new Target(coords)
  const activities = new Activities()
  const health = new Health(stats, leveler, activities)
  const mana = new Mana(stats, leveler, activities)
  const abilities = new Abilities(activities, target, health, mana)
  const persist = abilityFabric('persist', 'Defensive Persist', 1n)

  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  await abilities.learn(persist)

  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)
  activities.removeAll()
}
async function повышается_ли_здоровье_при_ауре() {
  const stats = { current: { hpTotal: 430, mpTotal: 130 } }
  const leveler = new Leveler()
  const coords = new Coords()
  const target = new Target(coords)
  const activities = new Activities()
  const health = new Health(stats, leveler, activities)
  const mana = new Mana(stats, leveler, activities)
  const abilities = new Abilities(activities, target, health, mana)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current
  const aura = abilityFabric('aura', 'Concentration Aura', 1n)
  await abilities.learn(aura)

  await abilities.castByTypeId('aura', aura.id)

  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)
  activities.removeAll()
}
function повышается_ли_здоровье_при_снаряжении() {
  const activities = new Activities()
  const stats = { current: { hpTotal: 430 } }
  const leveler = new Leveler()
  const inventory = new Inventory(activities)
  const health = new Health(stats, leveler, activities)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current
  const equipment = equipmentFabric('Helmet Of Truth')
  inventory.cargo.addItem(equipment)

  inventory.wearItemById(equipment.id)

  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)
  activities.removeAll(['equipments'])
}
function повышается_ли_здоровье_при_баффе() {
  const stats = { current: { hpTotal: 430 } }
  const leveler = new Leveler()
  const activities = new Activities()
  const health = new Health(stats, leveler, activities)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  activities.add(buffsFabric('Heart Of Lion', 1n))

  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)
}
function понижается_ли_здоровье_при_дебаффе() {
  const stats = { current: { hpTotal: 430 } }
  const leveler = new Leveler()
  const activities = new Activities()
  const health = new Health(stats, leveler, activities)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  activities.add(debuffsFabric('Curse Poison', 1n))

  console.assert(health.total < oldHPtotal && health.current <= health.total)
}
function одновременно_статы_лвл_пасивка_активка_бафы_дебафы_эквип() {
  const stats = { current: { hpTotal: 430 } }
  const leveler = new Leveler()
  const ability = abilityFabric('aura', 'Defensive Aura', 1n)
  const abilities = new Abilities()
  const activities = new Activities(abilities)
  const health = new Health(stats, leveler, activities)
  let oldHPtotal = health.total
  let oldHPcurrent = health.current

  oldHPtotal = health.total
  oldHPcurrent = health.current
  stats.current.hpTotal += 50
  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)

  oldHPtotal = health.total
  oldHPcurrent = health.current
  leveler.forceLevelUp()
  console.assert(health.total > oldHPtotal && health.current === health.total)

  oldHPtotal = health.total
  oldHPcurrent = health.current
  abilities.learn(ability)
  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)

  // oldHPtotal = health.total
  // oldHPcurrent = health.current
  // aSkills.push(listActiveSkills[0])
  // console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)

  oldHPtotal = health.total
  oldHPcurrent = health.current
  activities.add(buffsFabric('Heart Of Lion', 1n))
  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)

  health.restore()
  oldHPtotal = health.total
  oldHPcurrent = health.current
  activities.add(debuffsFabric('Curse Poison', 1n))
  console.assert(health.total < oldHPtotal && health.current <= health.total)

  oldHPtotal = health.total
  oldHPcurrent = health.current
  ///?????
  activities.add(equipmentFabric('Helmet Of Truth').activity)
  ///?????
  console.assert(health.total > oldHPtotal && health.current <= oldHPcurrent)
}

умрёт_ли_без_здоровья()
повышается_ли_здоровье_при_увеличении_CON()
повышается_ли_здоровье_при_левелапе()
повышается_ли_здоровье_при_персисте()
повышается_ли_здоровье_при_ауре()
повышается_ли_здоровье_при_снаряжении()

//

//// повышается_ли_здоровье_при_баффе()
//// понижается_ли_здоровье_при_дебаффе()

//// одновременно_статы_лвл_пасивка_активка_бафы_дебафы_эквип()
