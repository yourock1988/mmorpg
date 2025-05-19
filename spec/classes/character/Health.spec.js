import auraAbilityFabric from '../../../src/abstract-fabric/abilities/fabrics/auraAbilityFabric.js'
import persistAbilityFabric from '../../../src/abstract-fabric/abilities/fabrics/persistAbilityFabric.js'
import Abilities from '../../../src/classes/character/Abilities.js'
import Activities from '../../../src/classes/character/Activities.js'
import Health from '../../../src/classes/character/Health.js'
import Leveler from '../../../src/classes/character/Leveler.js'
import statsBasic from '../../../src/dicts/statsBasic.js'

function умрёт_ли_без_здоровья() {
  const stats = statsBasic['Orc']['Fighter']
  const leveler = new Leveler()
  const activities = new Activities()
  const health = new Health(stats, leveler, activities)
  const oldHPtotal = health.total

  health.forceDeath()

  console.assert(
    health.total === oldHPtotal &&
      health.current === 0n &&
      health.isLive === false
  )
}
function повышается_ли_здоровье_при_увеличении_CON() {
  const stats = statsBasic['Orc']['Mage']
  const leveler = new Leveler()
  const activities = new Activities()
  const health = new Health(stats, leveler, activities)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  stats.CON += 10n

  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)
}
function повышается_ли_здоровье_при_левелапе() {
  const stats = statsBasic['Orc']['Fighter']
  const leveler = new Leveler()
  const activities = new Activities()
  const health = new Health(stats, leveler, activities)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  leveler.forceLevelUp()

  console.assert(health.total > oldHPtotal && health.current > oldHPcurrent)
}
function повышается_ли_здоровье_при_персисте() {
  const stats = statsBasic['Orc']['Fighter']
  const leveler = new Leveler()
  const persist = persistAbilityFabric('Defensive Persist', 1n)
  const activities = new Activities()
  const abilities = new Abilities(activities)
  const health = new Health(stats, leveler, activities)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  abilities.learn(persist)

  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)
  activities.removeAll()
}
function повышается_ли_здоровье_при_ауре() {
  const stats = statsBasic['Orc']['Fighter']
  const aura = auraAbilityFabric('Concentration Aura', 1n)
  const leveler = new Leveler()
  const activities = new Activities()
  const abilities = new Abilities(activities)
  const health = new Health(stats, leveler, activities)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current
  abilities.learn(aura)

  abilities.castByTypeId('aura', aura.id, activities)

  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)
  activities.removeAll()
}
function повышается_ли_здоровье_при_баффе() {
  const stats = statsBasic['Orc']['Fighter']
  const leveler = new Leveler()
  const activities = new Activities()
  const health = new Health(stats, leveler, activities)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  activities.add(buffsFabric('Heart Of Lion', 1n))

  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)
}
function понижается_ли_здоровье_при_дебаффе() {
  const stats = statsBasic['Orc']['Fighter']
  const leveler = new Leveler()
  const activities = new Activities()
  const health = new Health(stats, leveler, activities)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  activities.add(debuffsFabric('Curse Poison', 1n))

  console.assert(health.total < oldHPtotal && health.current <= health.total)
}
function повышается_ли_здоровье_при_снаряжении() {
  const stats = statsBasic['Orc']['Fighter']
  const leveler = new Leveler()
  const activities = new Activities()
  const health = new Health(stats, leveler, activities)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  ///?????
  activities.add(equipmentFabric('Helmet Of Truth').activity)
  ///?????

  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)
}
function одновременно_статы_лвл_пасивка_активка_бафы_дебафы_эквип() {
  const stats = statsBasic['Orc']['Fighter']
  const leveler = new Leveler()
  const ability = auraAbilityFabric('Defensive Aura', 1n)
  const abilities = new Abilities()
  const activities = new Activities(abilities)
  const health = new Health(stats, leveler, activities)
  let oldHPtotal = health.total
  let oldHPcurrent = health.current

  oldHPtotal = health.total
  oldHPcurrent = health.current
  stats.CON += 10n
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

//// повышается_ли_здоровье_при_баффе()
//// понижается_ли_здоровье_при_дебаффе()
//// повышается_ли_здоровье_при_снаряжении()

//// одновременно_статы_лвл_пасивка_активка_бафы_дебафы_эквип()
