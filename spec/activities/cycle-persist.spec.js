import persistAbilityFabric from '../../src/abstract-fabric/abilities/fabrics/persistAbilityFabric.js'
import BootcampPersists from '../../src/bootcamps/BootcampPersists.js'
import Abilities from '../../src/classes/character/Abilities.js'
import Activities from '../../src/classes/character/Activities.js'
import Character from '../../src/classes/character/Character.js'

function обновляется_ли_персист_активити_при_добавлении_абилки() {
  const activities = new Activities()
  const abilities = new Abilities(activities)
  const persist = persistAbilityFabric('Defensive Persist', 1n)

  abilities.learn(persist)

  console.assert(
    activities.persists.length === 1 &&
      activities.auras.length === 0 &&
      activities.enforces.length === 1
  )

  activities.removeAll()
}
function действует_ли_выученный_персист_на_персонажа() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new BootcampPersists(player1)
  const oldPDef = player1.statsCombat.PDef
  // const oldHpTotal = player1.health.total
  // const oldHpCurrent = player1.health.current
  // player1.sp = 505n

  // bootcamp.train('Defensive Persist', 1n)

  // console.assert(
  //     player1.activities.persists.length === 1 &&
  //     player1.statsCombat.PDef > oldPDef &&
  //     player1.health.total > oldHpTotal &&
  //     player1.health.current === oldHpCurrent
  // )

  // player1.activities.removeAll()
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
    player1.activities.persists.length === 0 &&
      player1.statsCombat.PDef === oldPDef &&
      player1.health.total === oldHpTotal &&
      player1.health.current === oldHpCurrent
  )
}
function проверка_пульсирования_персиста() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new BootcampPersists(player1)
  let oldHpCurrent = player1.health.current
  player1.sp = 505n
  bootcamp.train('Defensive Persist', 1n)
  const persist = player1.abilities.persists[0]
  const idToToggle = persist.id

  // player1.abilities.toggleAuraById(idToToggle, true)

  // console.log(player1.health.current)

  const intervalId = setInterval(() => {
    console.assert(
      player1.health.current > oldHpCurrent ||
        player1.health.current === player1.health.total
    )
    // console.log(player1.health.current)
    // console.log(player1.health.total)
    oldHpCurrent = player1.health.current
  }, player1.activities.persists[0].config.pulseIntervalDelay + 33)

  setTimeout(() => {
    clearInterval(intervalId)
    // player1.abilities.toggleAuraById(idToToggle, false)
    player1.activities.removeAll()
  }, 2000)
}

обновляется_ли_персист_активити_при_добавлении_абилки()
действует_ли_выученный_персист_на_персонажа()
без_сп_обучение_не_срабатывает()
проверка_пульсирования_персиста()
