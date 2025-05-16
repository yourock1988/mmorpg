import auraAbilityFabric from '../src/abstract-fabric/abilities/fabrics/auraAbilityFabric.js'
import BootcampAuras from '../src/bootcamps/BootcampAuras.js'
import Abilities from '../src/classes/character/Abilities.js'
import Activities from '../src/classes/character/Activities.js'
import Character from '../src/classes/character/Character.js'

function обновляется_ли_активити_при_активации_ауры() {
  const activities = new Activities()
  const abilities = new Abilities(activities)
  const aura = auraAbilityFabric('Concentration Aura', 1n)
  const idToToggle = aura.id
  abilities.add(aura)

  abilities.toggleAuraById(idToToggle, true)

  console.assert(
    activities.auras.length === 1 &&
      activities.persists.length === 0 &&
      activities.enforces.length === 1
  )
}
function работает_ли_энфорс() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new BootcampAuras(player1)
  const oldAccuracy = player1.statsCombat.Accuracy
  const oldHpTotal = player1.health.total
  let oldHpCurrent = player1.health.current
  player1.sp = 505n
  bootcamp.train('Concentration Aura', 1n)
  const aura = player1.abilities.auras[0]
  const idToToggle = aura.id

  player1.abilities.toggleAuraById(idToToggle, true)

  console.assert(
    player1.abilities.aurasActivities.length === 1 &&
      player1.activities.auras.length === 1 &&
      player1.statsCombat.Accuracy > oldAccuracy &&
      player1.health.total > oldHpTotal &&
      player1.health.current === oldHpCurrent
  )

  player1.abilities.toggleAuraById(idToToggle, false)
}
function работает_ли_пульсирование() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new BootcampAuras(player1)
  let oldHpCurrent = player1.health.current
  player1.sp = 505n
  bootcamp.train('Concentration Aura', 1n)
  const aura = player1.abilities.auras[0]
  const idToToggle = aura.id

  player1.abilities.toggleAuraById(idToToggle, true)

  const intervalId = setInterval(() => {
    console.assert(player1.health.current < oldHpCurrent)
    oldHpCurrent = player1.health.current
  }, aura.activity.config.pulseIntervalDelay + 33)

  setTimeout(() => {
    clearInterval(intervalId)
    player1.abilities.toggleAuraById(idToToggle, false)
  }, 2000)
}
function без_сп_обучение_не_срабатывает() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new BootcampAuras(player1)
  const oldAccuracy = player1.statsCombat.Accuracy
  const oldHpTotal = player1.health.total
  const oldHpCurrent = player1.health.current
  player1.sp = 55n
  bootcamp.train('Concentration Aura', 1n)

  console.assert(
    player1.abilities.aurasActivities.length === 0 &&
      player1.activities.auras.length === 0 &&
      player1.statsCombat.Accuracy === oldAccuracy &&
      player1.health.total === oldHpTotal &&
      player1.health.current === oldHpCurrent
  )
}

работает_ли_энфорс()
работает_ли_пульсирование()
обновляется_ли_активити_при_активации_ауры()
без_сп_обучение_не_срабатывает()
