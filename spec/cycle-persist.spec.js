import persistAbilityFabric from '../src/abilities/fabrics/persistAbilityFabric.js'
import BootcampPersists from '../src/bootcamps/BootcampPersists.js'
import Abilities from '../src/classes/character/Abilities.js'
import Activities from '../src/classes/character/Activities2.js'
import Character from '../src/classes/character/Character.js'

function обновляется_ли_персист_активити_при_добавлении_абилки() {
  const abilities = new Abilities()
  const activities = new Activities(abilities)
  const persist = persistAbilityFabric('Defensive Persist', 1n)

  abilities.add(persist)

  console.assert(
    activities.persists.length === 1 &&
      activities.auras.length === 0 &&
      activities.enforces.length === 1
  )
}
function действует_ли_выученная_абилка_на_персонажа() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new BootcampPersists(player1)
  const oldPDef = player1.statsCombat.PDef
  const oldHpTotal = player1.health.total
  const oldHpCurrent = player1.health.current
  player1.sp = 505n

  bootcamp.train('Defensive Persist', 1n)

  console.assert(
    player1.abilities.persistsActivities.length === 1 &&
      player1.activities.persists.length === 1 &&
      player1.statsCombat.PDef > oldPDef &&
      player1.health.total > oldHpTotal &&
      player1.health.current === oldHpCurrent
  )
}
function без_сп_обучение_не_срабатывает() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new BootcampPersists(player1)
  const oldPDef = player1.statsCombat.PDef
  const oldHpTotal = player1.health.total
  const oldHpCurrent = player1.health.current
  player1.sp = 55n

  bootcamp.train('Defensive Persist', 1n)

  console.assert(
    player1.abilities.persistsActivities.length === 0 &&
      player1.activities.persists.length === 0 &&
      player1.statsCombat.PDef === oldPDef &&
      player1.health.total === oldHpTotal &&
      player1.health.current === oldHpCurrent
  )
}

обновляется_ли_персист_активити_при_добавлении_абилки()
действует_ли_выученная_абилка_на_персонажа()
без_сп_обучение_не_срабатывает()
