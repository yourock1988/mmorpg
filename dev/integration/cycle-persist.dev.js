import abilityFabric from '../../src/abstract-fabric/abilities/abilityFabric.js'
import Bootcamp from '../../src/bootcamps/Bootcamp.js'
import Abilities from '../../src/classes/character/Abilities.js'
import Activities from '../../src/classes/character/Activities.js'
import Character from '../../src/classes/character/Character.js'
import Coords from '../../src/classes/character/Coords.js'
import Target from '../../src/classes/character/Target.js'
import Health from '../../src/classes/character/Health.js'
import Mana from '../../src/classes/character/Mana.js'

async function обновляется_ли_персист_активити_при_добавлении_абилки() {
  const coords = new Coords()
  const target = new Target(coords)
  const activities = new Activities()
  const health = new Health(null, null, activities)
  const mana = new Mana(null, null, activities)
  const abilities = new Abilities(activities, target, health, mana)
  const persist = abilityFabric('persist', 'Defensive Persist', 1n)

  await abilities.learn(persist)

  console.assert(
    activities.persists.length === 1 &&
      activities.auras.length === 0 &&
      activities.enforces.length === 1
  )
  activities.removeAll()
}
async function действует_ли_выученный_персист_на_персонажа() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  const oldPDef = player1.statsCombat.PDef
  const oldHpTotal = player1.health.total
  const oldHpCurrent = player1.health.current
  player1.sp = 505n

  await bootcamp.train('persist', 'Defensive Persist', 1n)

  console.assert(
    player1.activities.persists.length === 1 &&
      player1.statsCombat.PDef > oldPDef &&
      player1.health.total > oldHpTotal &&
      player1.health.current === oldHpCurrent
  )
  player1.activities.removeAll()
}
async function без_сп_обучение_не_срабатывает() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  const oldPDef = player1.statsCombat.PDef
  const oldHpTotal = player1.health.total
  const oldHpCurrent = player1.health.current
  player1.sp = 55n

  await bootcamp.train('persist', 'Defensive Persist', 1n)

  console.assert(
    player1.activities.persists.length === 0 &&
      player1.statsCombat.PDef === oldPDef &&
      player1.health.total === oldHpTotal &&
      player1.health.current === oldHpCurrent
  )
}
async function проверка_пульсирования_персиста() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  const oldPDef = player1.statsCombat.PDef
  const oldHpTotal = player1.health.total
  let oldHpCurrent = player1.health.current
  player1.sp = 505n

  await bootcamp.train('persist', 'Defensive Persist', 1n)

  const intervalId = setInterval(() => {
    console.assert(player1.health.current > oldHpCurrent)
    oldHpCurrent = player1.health.current
    if (player1.health.current === player1.health.total) {
      clearInterval(intervalId)
      player1.activities.removeAll()
    }
  }, player1.activities.persists[0].config.pulseIntervalDelay + 33)
}

обновляется_ли_персист_активити_при_добавлении_абилки()
действует_ли_выученный_персист_на_персонажа()
без_сп_обучение_не_срабатывает()
проверка_пульсирования_персиста()
