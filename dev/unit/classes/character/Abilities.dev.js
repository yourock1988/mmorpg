import abilityFabric from '../../../../src/abstract-fabric/abilities/abilityFabric.js'
import Abilities from '../../../../src/classes/character/Abilities.js'
import Activities from '../../../../src/classes/character/Activities.js'
import Coords from '../../../../src/classes/character/Coords.js'
import Health from '../../../../src/classes/character/Health.js'
import Leveler from '../../../../src/classes/character/Leveler.js'
import Mana from '../../../../src/classes/character/Mana.js'
import Target from '../../../../src/classes/character/Target.js'

async function персист_изучается() {
  const stats = { current: { hpTotal: 430, hpRegen: 4.3, mpTotal: 130 } }
  const leveler = new Leveler()
  const coords = new Coords()
  const target = new Target(coords)
  const activities = new Activities()
  const health = new Health(stats, leveler, activities)
  const mana = new Mana(stats, leveler, activities)
  const abilities = new Abilities(activities, target, health, mana)

  await abilities.learn(abilityFabric('persist', 'Defensive Persist', 1n))

  console.assert(abilities.persists.length === 1)

  activities.removeAll()
}

async function персист_активируется() {
  const stats = { current: { hpTotal: 430, hpRegen: 4.3, mpTotal: 130 } }
  const leveler = new Leveler()
  const coords = new Coords()
  const target = new Target(coords)
  const activities = new Activities()
  const health = new Health(stats, leveler, activities)
  const mana = new Mana(stats, leveler, activities)
  const abilities = new Abilities(activities, target, health, mana)

  await abilities.learn(abilityFabric('persist', 'Defensive Persist', 1n))

  console.assert(activities.persists.length === 3)

  activities.removeAll()
}

async function персист_енфорсится() {
  const stats = { current: { hpTotal: 430, hpRegen: 4.3, mpTotal: 130 } }
  const leveler = new Leveler()
  const coords = new Coords()
  const target = new Target(coords)
  const activities = new Activities()
  const health = new Health(stats, leveler, activities)
  const mana = new Mana(stats, leveler, activities)
  const abilities = new Abilities(activities, target, health, mana)
  let oldHPtotal = health.total
  let oldHPcurrent = health.current

  await abilities.learn(abilityFabric('persist', 'Defensive Persist', 1n))

  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)
  activities.removeAll()
}

async function персист_пульсирует() {
  const stats = { current: { hpTotal: 430, hpRegen: 4.3, mpTotal: 130 } }
  const leveler = new Leveler()
  const coords = new Coords()
  const target = new Target(coords)
  const activities = new Activities()
  const health = new Health(stats, leveler, activities)
  const mana = new Mana(stats, leveler, activities)
  const abilities = new Abilities(activities, target, health, mana)

  await abilities.learn(abilityFabric('persist', 'Defensive Persist', 1n))

  let oldHPtotal = health.total
  let oldHPcurrent = health.current
  let intervalId = setInterval(() => {
    console.assert(health.total === oldHPtotal && health.current > oldHPcurrent)
    oldHPtotal = health.total
    oldHPcurrent = health.current
  }, 1030)

  setTimeout(() => {
    clearInterval(intervalId)
    activities.removeAll()
    // health.forceDeath()
  }, 3300)
}

function всё_сразу() {
  const activities = new Activities()
  const abilities = new Abilities(activities, target, health, mana)
  const health = new Health(null, null, activities)
  let oldHPtotal = health.total
  let oldHPcurrent = health.current

  ablilities.learn(abilityFabric('persist', 'Defensive Persist', 1n))

  console.assert(
    activities.persists.length === 1 &&
      ablilities.persists.length === 1 &&
      health.total > oldHPtotal &&
      health.current === oldHPcurrent
  )

  oldHPtotal = health.total
  oldHPcurrent = health.current
  let intervalId = setInterval(() => {
    console.assert(health.total === oldHPtotal && health.current > oldHPcurrent)
    oldHPtotal = health.total
    oldHPcurrent = health.current
  }, 333)

  setTimeout(() => {
    clearInterval(intervalId)
    health.forceDeath()
  }, 2000)
}

персист_изучается()
персист_активируется()
персист_енфорсится()
персист_пульсирует()
// всё_сразу()
