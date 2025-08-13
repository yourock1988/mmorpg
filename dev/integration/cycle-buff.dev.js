import Bootcamp from '../../src/classes/creatures/npcs/Bootcamp.js'
import Player from '../../src/classes/creatures/Player.js'

async function баф_не_выучивается_при_недостатке_сп() {
  const player1 = new Player('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  const oldAccuracy = player1.statsCombat.current.Accuracy
  const oldHpTotal = player1.health.total
  player1.social.sp = 55n

  await bootcamp.trainAbility('buff', 'Heart Of Lion', 1n)

  console.assert(player1.abilities.buffs.length === 0)

  player1.social.destroy()
  player1.activities.removeAll()
  bootcamp.destroy()
}
async function баф_выучивается_при_наличии_сп() {
  const player1 = new Player('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  const oldAccuracy = player1.statsCombat.current.Accuracy
  const oldHpTotal = player1.health.total
  player1.social.sp = 505n

  await bootcamp.trainAbility('buff', 'Heart Of Lion', 1n)

  console.assert(player1.abilities.buffs.length === 1)

  player1.social.destroy()
  player1.activities.removeAll()
  bootcamp.destroy()
}
async function баф_кастуется_на_самого_себя() {
  const player1 = new Player('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  player1.leveler.forceSetLevel(5n)
  player1.social.sp = 505n
  await bootcamp.trainAbility('buff', 'Heart Of Lion', 1n)
  const buff = player1.abilities.buffs[0]
  const oldAccuracy = player1.statsCombat.current.Accuracy
  const oldHpTotal = player1.health.total
  player1.target.set(player1)

  await player1.abilities.cast(buff)

  console.assert(
    player1.activities.buffs.length === 1 &&
      player1.statsCombat.current.Accuracy > oldAccuracy &&
      player1.health.total > oldHpTotal
  )
  player1.social.destroy()
  player1.activities.removeAll()
  bootcamp.destroy()
}
async function баф_кастуется_на_контрагенте() {
  const player1 = new Player('Player1', 'Orc', 'Fighter', 'Raider')
  const player2 = new Player('Player2', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  player1.social.sp = 505n
  player1.target.set(player2)
  player1.leveler.forceSetLevel(5n)
  await bootcamp.trainAbility('buff', 'Heart Of Lion', 1n)
  const buff = player1.abilities.buffs[0]

  await player1.abilities.cast(buff)

  console.assert(player2.activities.buffs.length === 1)

  player2.activities.removeAll()
  player1.social.destroy()
  player1.activities.removeAll()
  bootcamp.destroy()
}
async function энфорс_действует_после_завершения_каста_на_контрагенте() {
  const player1 = new Player('Player1', 'Orc', 'Fighter', 'Raider')
  const player2 = new Player('Player2', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  player1.social.sp = 505n
  player1.target.set(player2)
  player1.leveler.forceSetLevel(5n)
  await bootcamp.trainAbility('buff', 'Heart Of Lion', 1n)
  const buff = player1.abilities.buffs[0]
  const oldAccuracy = player2.statsCombat.current.Accuracy
  const oldHpTotal = player2.health.total

  await player1.abilities.cast(buff)

  console.assert(
    player2.statsCombat.current.Accuracy > oldAccuracy &&
      player2.health.total > oldHpTotal
  )

  player2.activities.removeAll()
  player1.social.destroy()
  player1.activities.removeAll()
  bootcamp.destroy()
}
async function пульсация_действует_после_завершения_каста_на_контрагенте() {
  const player1 = new Player('Player1', 'Orc', 'Fighter', 'Raider')
  const player2 = new Player('Player2', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  player1.social.sp = 505n
  player1.target.set(player2)
  player1.leveler.forceSetLevel(5n)
  player2.leveler.forceSetLevel(5n)
  player2.health.lose(200)
  await bootcamp.trainAbility('buff', 'Heart Of Lion', 1n)
  const buff = player1.abilities.buffs[0]
  let oldHpCurrent = player2.health.current

  await player1.abilities.cast(buff)

  const intervalId = setInterval(() => {
    console.assert(player2.health.current > oldHpCurrent)
    oldHpCurrent = player2.health.current
    if (player2.mana.current < 213n) {
      clearInterval(intervalId)
      player2.activities.removeAll()
      player1.social.destroy()
      player1.activities.removeAll()
      bootcamp.destroy()
    }
  }, player2.activities.buffs[0].config.pulseIntervalDelay + 33)
}
async function энфорс_до_завершения_каста_не_действует_на_контрагенте() {
  const player1 = new Player('Player1', 'Orc', 'Fighter', 'Raider')
  const player2 = new Player('Player2', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  player1.social.sp = 505n
  player1.target.set(player2)
  player1.leveler.forceSetLevel(5n)
  await bootcamp.trainAbility('buff', 'Heart Of Lion', 1n)
  const buff = player1.abilities.buffs[0]
  const oldAccuracy = player2.statsCombat.current.Accuracy
  const oldHpTotal = player2.health.total

  const cast = player1.abilities.cast(buff)

  console.assert(
    player2.statsCombat.current.Accuracy === oldAccuracy &&
      player2.health.total === oldHpTotal
  )

  await cast
  player2.activities.removeAll()
  player1.social.destroy()
  player1.activities.removeAll()
  bootcamp.destroy()
}
async function пульсация_до_завершения_каста_не_действует_на_контрагенте() {
  const player1 = new Player('Player1', 'Orc', 'Fighter', 'Raider')
  const player2 = new Player('Player2', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  player1.social.sp = 505n
  player1.target.set(player2)
  player1.leveler.forceSetLevel(5n)
  player2.leveler.forceSetLevel(5n)
  player2.health.lose(200)
  await bootcamp.trainAbility('buff', 'Heart Of Lion', 1n)
  const buff = player1.abilities.buffs[0]
  let oldHpCurrent = player2.health.current

  const cast = player1.abilities.cast(buff)

  const intervalId = setInterval(() => {
    // console.assert(player2.health.current === oldHpCurrent)
    oldHpCurrent = player2.health.current
  }, buff.createActivity().config.pulseIntervalDelay + 33)
  await cast
  clearInterval(intervalId)

  player2.activities.removeAll()
  player1.social.destroy()
  player1.activities.removeAll()
  bootcamp.destroy()
}
async function баф_не_кастуется_без_цели() {
  const player1 = new Player('Player1', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  player1.social.sp = 505n
  player1.leveler.forceSetLevel(5n)
  await bootcamp.trainAbility('buff', 'Heart Of Lion', 1n)
  const buff = player1.abilities.buffs[0]

  let cast = await player1.abilities.cast(buff)

  console.assert(cast === false)

  player1.social.destroy()
  player1.activities.removeAll()
  bootcamp.destroy()
}
async function при_превышении_дистанции_кастующий_начинает_преследование() {
  const player1 = new Player('Player1', 'Orc', 'Fighter', 'Raider')
  const player2 = new Player('Player2', 'Orc', 'Fighter', 'Raider')
  const bootcamp = new Bootcamp(player1)
  player1.social.sp = 505n
  player1.target.set(player2)
  player1.leveler.forceSetLevel(5n)
  player1.coords.teleportTo({ x: 25, y: 25 })
  player2.coords.teleportTo({ x: -10, y: -10 })
  await bootcamp.trainAbility('buff', 'Heart Of Lion', 1n)
  const buff = player1.abilities.buffs[0]

  let cast = player1.abilities.cast(buff)

  // setTimeout(() => {
  //   player2.coords.teleportTo({ x: -30, y: 30 })
  // }, 2500)

  cast = await cast

  console.assert(cast === true && player2.activities.buffs.length === 1)
  player2.activities.removeAll()
  player1.social.destroy()
  player1.activities.removeAll()
  bootcamp.destroy()
}

баф_не_выучивается_при_недостатке_сп()
баф_выучивается_при_наличии_сп()
баф_кастуется_на_самого_себя()
баф_кастуется_на_контрагенте()
энфорс_действует_после_завершения_каста_на_контрагенте()
пульсация_действует_после_завершения_каста_на_контрагенте()
энфорс_до_завершения_каста_не_действует_на_контрагенте()
баф_не_кастуется_без_цели()
при_превышении_дистанции_кастующий_начинает_преследование()

//!!! пульсация_до_завершения_каста_не_действует_на_контрагенте()
// каст_не_срабатывает_если_дистанция_до_контрагента_превышена
