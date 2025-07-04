import Bootcamp from '../../src/classes/Bootcamp.js'
import Character from '../../src/classes/character/Character.js'

async function дебаф_не_выучивается_при_недостатке_сп() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  player1.social.sp = 55n

  await bootcamp.train('debuff', 'Curse Poison', 1n)

  console.assert(player1.abilities.debuffs.length === 0)

  player1.social.destroy()
  player1.activities.removeAll()
}
async function дебаф_выучивается_при_наличии_сп() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  player1.social.sp = 505n

  await bootcamp.train('debuff', 'Curse Poison', 1n)

  console.assert(player1.abilities.debuffs.length === 1)

  player1.social.destroy()
  player1.activities.removeAll()
}
async function дебаф_кастуется_на_самого_себя() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  player1.leveler.forceSetLevel(5n)
  player1.social.sp = 505n
  await bootcamp.train('debuff', 'Curse Poison', 1n)
  const debuff = player1.abilities.debuffs[0]
  player1.target.set(player1)

  await player1.abilities.cast(debuff)

  console.assert(player1.activities.debuffs.length === 1)

  player1.social.destroy()
  player1.activities.removeAll()
}
async function дебаф_кастуется_на_контрагенте() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const player2 = new Character('Player2', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  player1.social.sp = 505n
  player1.target.set(player2)
  player1.leveler.forceSetLevel(5n)
  await bootcamp.train('debuff', 'Curse Poison', 1n)
  const debuff = player1.abilities.debuffs[0]

  await player1.abilities.cast(debuff)

  console.assert(player2.activities.debuffs.length === 1)

  player2.activities.removeAll()
  player1.social.destroy()
  player1.activities.removeAll()
}
async function энфорс_действует_после_завершения_каста_на_контрагенте() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const player2 = new Character('Player2', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  player1.social.sp = 505n
  player1.target.set(player2)
  player1.leveler.forceSetLevel(5n)
  await bootcamp.train('debuff', 'Dryad Root', 1n)
  const debuff = player1.abilities.debuffs[0]
  const oldHpTotal = player2.health.total

  await player1.abilities.cast(debuff)

  console.assert(player2.statsCombat.current.Speed === 0)

  player2.activities.removeAll()
  player1.social.destroy()
  player1.activities.removeAll()
}
async function пульсация_действует_после_завершения_каста_на_контрагенте() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const player2 = new Character('Player2', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  player1.social.sp = 505n
  player1.target.set(player2)
  player1.leveler.forceSetLevel(5n)
  player2.leveler.forceSetLevel(5n)
  await bootcamp.train('debuff', 'Curse Poison', 1n)
  const debuff = player1.abilities.debuffs[0]

  await player1.abilities.cast(debuff)

  let oldHpCurrent = player2.health.current
  const intervalId = setInterval(() => {
    console.assert(player2.health.current < oldHpCurrent)
    oldHpCurrent = player2.health.current
    if (oldHpCurrent < 802n) {
      clearInterval(intervalId)
      player2.activities.removeAll()
      player1.social.destroy()
      player1.activities.removeAll()
    }
  }, player2.activities.debuffs[0].config.pulseIntervalDelay + 33)
}
async function энфорс_до_завершения_каста_не_действует_на_контрагенте() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const player2 = new Character('Player2', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  player1.social.sp = 505n
  player1.target.set(player2)
  player1.leveler.forceSetLevel(5n)
  await bootcamp.train('debuff', 'Curse Poison', 1n)
  const debuff = player1.abilities.debuffs[0]
  const oldHpTotal = player2.health.total

  const cast = player1.abilities.cast(debuff)

  console.assert(player2.health.total === oldHpTotal)

  await cast
  player2.activities.removeAll()
  player1.social.destroy()
  player1.activities.removeAll()
}
async function пульсация_до_завершения_каста_не_действует_на_контрагенте() {
  const player1 = new Character('Player1', 'Orc', 'Fighter', 'Raider')
  const player2 = new Character('Player2', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  player1.social.sp = 505n
  player1.target.set(player2)
  player1.leveler.forceSetLevel(5n)
  player2.leveler.forceSetLevel(5n)
  await bootcamp.train('debuff', 'Curse Poison', 1n)
  const debuff = player1.abilities.debuffs[0]
  let oldHpCurrent = player2.health.current

  const cast = player1.abilities.cast(debuff)

  const intervalId = setInterval(() => {
    console.assert(player2.health.current === oldHpCurrent)
    oldHpCurrent = player2.health.current
  }, debuff.createActivity().config.pulseIntervalDelay + 33)

  await cast
  clearInterval(intervalId)
  player2.activities.removeAll()
  player1.social.destroy()
  player1.activities.removeAll()
}

дебаф_не_выучивается_при_недостатке_сп()
дебаф_выучивается_при_наличии_сп()
дебаф_кастуется_на_самого_себя()
дебаф_кастуется_на_контрагенте()
// энфорс_действует_после_завершения_каста_на_контрагенте()
пульсация_действует_после_завершения_каста_на_контрагенте()
энфорс_до_завершения_каста_не_действует_на_контрагенте()
пульсация_до_завершения_каста_не_действует_на_контрагенте()

//

// каст_не_срабатывает_если_дистанция_до_контрагента_превышена
// дебаф_не_кастуется_без_цели
