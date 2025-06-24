import abilityFabric from '../../src/abstract-fabric/abilities/abilityFabric.js'
import Bootcamp from '../../src/classes/Bootcamp.js'
import Abilities from '../../src/classes/character/Abilities.js'
import Activities from '../../src/classes/character/Activities.js'
import Character from '../../src/classes/character/Character.js'
import Coords from '../../src/classes/character/Coords.js'
import Target from '../../src/classes/character/Target.js'
import Health from '../../src/classes/character/Health.js'
import Mana from '../../src/classes/character/Mana.js'
import Leveler from '../../src/classes/character/Leveler.js'

async function обновляется_ли_персист_активити_при_добавлении_абилки() {
  const stats = { current: { hpTotal: 430, hpRegen: 4.3, mpTotal: 130 } }
  const leveler = new Leveler()
  const coords = new Coords()
  const target = new Target(coords)
  const activities = new Activities()
  const health = new Health(stats, leveler, activities)
  const mana = new Mana(stats, leveler, activities)
  const abilities = new Abilities(activities, target, health, mana)
  const persist = abilityFabric('persist', 'Defensive Persist', 1n)

  await abilities.learn(persist)

  console.assert(activities.persists.length === 3)

  activities.removeAll()
}
async function действует_ли_выученный_персист_на_персонажа() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  const oldPDef = player1.statsCombat.current.PDef
  const oldHpTotal = player1.health.total
  const oldHpCurrent = player1.health.current
  player1.social.sp = 505n

  await bootcamp.train('persist', 'Defensive Persist', 1n)

  console.assert(
    player1.statsCombat.current.PDef > oldPDef &&
      player1.health.total > oldHpTotal &&
      player1.health.current === oldHpCurrent
  )

  player1.activities.removeAll()
}
async function без_сп_обучение_не_срабатывает() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  player1.social.sp = 55n

  await bootcamp.train('persist', 'Defensive Persist', 1n)

  console.assert(player1.activities.persists.length === 2)

  player1.activities.removeAll()
}
async function проверка_пульсирования_персиста() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  let oldHpCurrent = player1.health.current
  player1.social.sp = 505n

  await bootcamp.train('persist', 'Defensive Persist', 1n)

  let p = player1.activities.persists.find(
    p => p.caption === 'Defensive Persist'
  )

  const intervalId = setInterval(() => {
    console.assert(player1.health.current > oldHpCurrent)
    oldHpCurrent = player1.health.current
    if (player1.health.current === player1.health.total) {
      clearInterval(intervalId)
      player1.activities.removeAll()
    }
  }, p.config.pulseIntervalDelay + 33)
}

обновляется_ли_персист_активити_при_добавлении_абилки()
действует_ли_выученный_персист_на_персонажа()
без_сп_обучение_не_срабатывает()
проверка_пульсирования_персиста()
