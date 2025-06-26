import abilityFabric from '../../../../src/abstract-fabric/abilities/abilityFabric.js'
import Abilities from '../../../../src/classes/character/Abilities.js'
import Activities from '../../../../src/classes/character/Activities.js'
import Health from '../../../../src/classes/character/Health.js'

function персист_изучается() {
  const activities = new Activities()
  const ablilities = new Abilities(activities)

  ablilities.learn(abilityFabric('persist', 'Defensive Persist', 1n))

  console.assert(ablilities.persists.length === 1)
  activities.removeAll()
}

function персист_активируется() {
  const activities = new Activities()
  const ablilities = new Abilities(activities)

  ablilities.learn(abilityFabric('persist', 'Defensive Persist', 1n))

  console.assert(activities.persists.length === 1)
  activities.removeAll()
}

function персист_енфорсится() {
  const activities = new Activities()
  const ablilities = new Abilities(activities)
  const health = new Health(null, null, activities)
  let oldHPtotal = health.total
  let oldHPcurrent = health.current

  ablilities.learn(abilityFabric('persist', 'Defensive Persist', 1n))

  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)
  activities.removeAll()
}

function персист_пульсирует() {
  const activities = new Activities()
  const ablilities = new Abilities(activities)
  const health = new Health(null, null, activities)

  ablilities.learn(abilityFabric('persist', 'Defensive Persist', 1n))

  let oldHPtotal = health.total
  let oldHPcurrent = health.current
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

function всё_сразу() {
  const activities = new Activities()
  const ablilities = new Abilities(activities)
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
всё_сразу()
