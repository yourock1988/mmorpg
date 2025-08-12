import abilityFabric from '../../src/abstract-fabric/abilities/abilityFabric.js'
import Bootcamp from '../../src/classes/creatures/npcs/Bootcamp.js'
import Abilities from '../../src/classes/character/Abilities.js'
import Activities from '../../src/classes/character/Activities.js'
import Coords from '../../src/classes/Coords.js'
import Target from '../../src/classes/character/Target.js'
import Health from '../../src/classes/character/Health.js'
import Mana from '../../src/classes/character/Mana.js'
import Leveler from '../../src/classes/character/Leveler.js'
import Wear from '../../src/classes/character/Wear.js'
import StatsCombat from '../../src/classes/character/StatsCombat.js'
import statsBasic from '../../src/dicts/statsBasic.js'
import Player from '../../src/classes/creatures/Player.js'

async function обновляется_ли_активити_при_активации_ауры() {
  const sb = { ...statsBasic.Orc.Fighter }
  const leveler = new Leveler()
  const coords = new Coords()
  const target = new Target(coords)
  const activities = new Activities()
  const wear = new Wear(activities)
  const statsCombat = new StatsCombat(sb, leveler, wear, activities)
  const health = new Health(statsCombat, leveler, activities)
  const mana = new Mana(statsCombat, leveler, activities)
  const abilities = new Abilities(activities, target, health, mana)
  const aura = abilityFabric('aura', 'Concentration Aura', 1n)
  await abilities.learn(aura)

  await abilities.cast(aura)

  // console.log(activities.list)

  console.assert(activities.auras.length === 1)
  activities.removeAll()
}
async function работает_ли_энфорс() {
  const player1 = new Player('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  const oldAccuracy = player1.statsCombat.current.Accuracy
  const oldHpTotal = player1.health.total
  let oldHpCurrent = player1.health.current
  player1.social.sp = 505n
  await bootcamp.train('aura', 'Concentration Aura', 1n)
  const aura = player1.abilities.auras[0]

  await player1.abilities.cast(aura)

  console.assert(
    player1.activities.auras.length === 1 &&
      player1.statsCombat.current.Accuracy > oldAccuracy &&
      player1.health.total > oldHpTotal &&
      player1.health.current === oldHpCurrent
  )
  player1.social.destroy()
  player1.activities.removeAll()
  bootcamp.destroy()
}
async function работает_ли_пульсирование() {
  const player1 = new Player('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  let oldHpCurrent = player1.health.current
  player1.social.sp = 505n
  await bootcamp.train('aura', 'Concentration Aura', 1n)
  const aura = player1.abilities.auras[0]

  await player1.abilities.cast(aura)

  const intervalId = setInterval(() => {
    console.assert(player1.health.current < oldHpCurrent)
    oldHpCurrent = player1.health.current
    if (oldHpCurrent < 415n) {
      clearInterval(intervalId)
      player1.social.destroy()
      player1.activities.removeAll()
      bootcamp.destroy()
    }
  }, player1.activities.auras[0].config.pulseIntervalDelay + 17)
}
async function без_сп_обучение_не_срабатывает() {
  const player1 = new Player('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  const oldAccuracy = player1.statsCombat.current.Accuracy
  const oldHpTotal = player1.health.total
  const oldHpCurrent = player1.health.current
  player1.social.sp = 55n
  await bootcamp.train('aura', 'Concentration Aura', 1n)

  console.assert(
    player1.activities.auras.length === 0 &&
      player1.statsCombat.current.Accuracy === oldAccuracy &&
      player1.health.total === oldHpTotal &&
      player1.health.current === oldHpCurrent
  )
  player1.social.destroy()
  player1.activities.removeAll()
  bootcamp.destroy()
}

обновляется_ли_активити_при_активации_ауры()
работает_ли_энфорс()
работает_ли_пульсирование()
без_сп_обучение_не_срабатывает()
