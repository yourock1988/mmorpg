import Health from '../../src/classes/character/Health.js'
import Leveler from '../../src/classes/character/Leveler.js'
import Wear from '../../src/classes/character/Wear.js'
import listActiveSkills from '../../src/lists/listActiveSkills.js'
import listBuffs from '../../src/lists/listBuffs.js'
import listDebuffs from '../../src/lists/listDebuffs.js'
import listEquipment from '../../src/lists/listEquipment.js'
import listPassiveSkills from '../../src/lists/listPassiveSkills.js'
import listStatsBasic from '../../src/lists/listStatsBasic.js'

function умрёт_ли_без_здоровья() {
  const leveler = new Leveler()
  const wear = new Wear()
  const stats = listStatsBasic['Orc']['Fighter']
  const buffs = [listBuffs[0]]
  const pSkills = [listPassiveSkills[0]]
  const health = new Health(stats, leveler, pSkills, [], buffs, [], wear)
  const oldHPtotal = health.total

  health.forceDeath()

  console.assert(
    health.total === oldHPtotal &&
      health.current === 0n &&
      health.isLive === false
  )
}
function повышается_ли_здоровье_при_увеличении_CON() {
  const stats = listStatsBasic['Orc']['Mage']
  const leveler = new Leveler()
  const health = new Health(stats, leveler)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  stats.CON += 10n

  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)
}
function повышается_ли_здоровье_при_левелапе() {
  const leveler = new Leveler()
  const stats = listStatsBasic['Orc']['Fighter']
  const health = new Health(stats, leveler)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  leveler.forceLevelUp()

  console.assert(health.total > oldHPtotal && health.current > oldHPcurrent)
}
function повышается_ли_здоровье_при_пасивке() {
  const stats = listStatsBasic['Orc']['Fighter']
  const leveler = new Leveler()
  const pSkills = []
  const health = new Health(stats, leveler, pSkills)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  pSkills.push(listPassiveSkills[0])

  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)
}
function повышается_ли_здоровье_при_активке() {
  const stats = listStatsBasic['Orc']['Fighter']
  const leveler = new Leveler()
  const aSkills = []
  const health = new Health(stats, leveler, null, aSkills)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  aSkills.push(listActiveSkills[0])

  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)
}
function повышается_ли_здоровье_при_баффе() {
  const stats = listStatsBasic['Orc']['Fighter']
  const leveler = new Leveler()
  const buffs = []
  const health = new Health(stats, leveler, null, null, buffs)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  buffs.push(listBuffs[0])

  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)
}
function понижается_ли_здоровье_при_дебаффе() {
  const stats = listStatsBasic['Orc']['Fighter']
  const leveler = new Leveler()
  const debuffs = []
  const health = new Health(stats, leveler, null, null, null, debuffs)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  debuffs.push(listDebuffs[0])

  console.assert(health.total < oldHPtotal && health.current <= health.total)
}
function повышается_ли_здоровье_при_снаряжении() {
  const stats = listStatsBasic['Orc']['Fighter']
  const leveler = new Leveler()
  const wear = new Wear()
  const health = new Health(stats, leveler, null, null, null, null, wear)
  const oldHPtotal = health.total
  const oldHPcurrent = health.current

  wear.mount(listEquipment[2])

  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)
}
function одновременно_статы_лвл_пасивка_активка_бафы_дебафы_эквип() {
  const stats = listStatsBasic['Orc']['Fighter']
  const lvler = new Leveler()
  const pSkills = []
  const aSkills = []
  const buffs = []
  const debfs = []
  const wear = new Wear()
  const health = new Health(stats, lvler, pSkills, aSkills, buffs, debfs, wear)
  let oldHPtotal = health.total
  let oldHPcurrent = health.current

  oldHPtotal = health.total
  oldHPcurrent = health.current
  stats.CON += 10n
  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)

  oldHPtotal = health.total
  oldHPcurrent = health.current
  lvler.forceLevelUp()
  console.assert(health.total > oldHPtotal && health.current === health.total)

  oldHPtotal = health.total
  oldHPcurrent = health.current
  pSkills.push(listPassiveSkills[0])
  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)

  oldHPtotal = health.total
  oldHPcurrent = health.current
  aSkills.push(listActiveSkills[0])
  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)

  oldHPtotal = health.total
  oldHPcurrent = health.current
  buffs.push(listBuffs[0])
  console.assert(health.total > oldHPtotal && health.current === oldHPcurrent)

  health.restore()
  oldHPtotal = health.total
  oldHPcurrent = health.current
  debfs.push(listDebuffs[0])
  console.assert(health.total < oldHPtotal && health.current <= health.total)

  oldHPtotal = health.total
  oldHPcurrent = health.current
  wear.mount(listEquipment[2])
  console.assert(health.total > oldHPtotal && health.current <= oldHPcurrent)
}

умрёт_ли_без_здоровья()
повышается_ли_здоровье_при_увеличении_CON()
повышается_ли_здоровье_при_левелапе()
повышается_ли_здоровье_при_пасивке()
повышается_ли_здоровье_при_активке()
повышается_ли_здоровье_при_баффе()
понижается_ли_здоровье_при_дебаффе()
повышается_ли_здоровье_при_снаряжении()
одновременно_статы_лвл_пасивка_активка_бафы_дебафы_эквип()
