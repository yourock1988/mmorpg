import sb2 from '../../../../src/dicts/statsBasic.js'
import Wear from '../../../../src/classes/character/Wear.js'
import Leveler from '../../../../src/classes/character/Leveler.js'
import Activities from '../../../../src/classes/character/Activities.js'
import StatsCombat from '../../../../src/classes/character/StatsCombat.js'
import equipmentFabric from '../../../../src/abstract-fabric/items/fabrics/equipmentFabric.js'
import activityFabric from '../../../../src/abstract-fabric/activities/activityFabric.js'

function увеличиваются_ли_статы_при_повышении_левела() {
  const statsBasic = { ...sb2.Orc.Fighter }
  const activities = new Activities()
  const leveler = new Leveler()
  const wear = new Wear(activities)
  const statsCombat = new StatsCombat(statsBasic, leveler, wear, activities)
  const oldStats = statsCombat.current

  leveler.forceSetLevel(2n)

  console.assert(
    statsCombat.current.hpTotal > oldStats.hpTotal &&
      statsCombat.current.hpRegen > oldStats.hpRegen &&
      statsCombat.current.mpTotal > oldStats.mpTotal &&
      statsCombat.current.mpRegen > oldStats.mpRegen &&
      statsCombat.current.PAtk > oldStats.PAtk &&
      statsCombat.current.PDef > oldStats.PDef &&
      statsCombat.current.Accuracy > oldStats.Accuracy &&
      statsCombat.current.CritRate > oldStats.CritRate &&
      statsCombat.current.AtkSpd > oldStats.AtkSpd &&
      statsCombat.current.MAtk > oldStats.MAtk &&
      statsCombat.current.MDef > oldStats.MDef &&
      statsCombat.current.Evasion > oldStats.Evasion &&
      statsCombat.current.Speed > oldStats.Speed &&
      statsCombat.current.CastSpd > oldStats.CastSpd
  )
}

function увеличиваются_ли_статы_при_надевании_шмота() {
  const statsBasic = { ...sb2.Orc.Fighter }
  const activities = new Activities()
  const leveler = new Leveler()
  const wear = new Wear(activities)
  const statsCombat = new StatsCombat(statsBasic, leveler, wear, activities)
  const oldStats = statsCombat.current

  wear.mount(equipmentFabric('Axe Of Glory'))

  console.assert(
    statsCombat.current.PAtk > oldStats.PAtk &&
      statsCombat.current.AtkSpd > oldStats.AtkSpd
  )
}

function увеличиваются_ли_статы_при_бафе() {
  const statsBasic = { ...sb2.Orc.Fighter }
  const activities = new Activities()
  const leveler = new Leveler()
  const wear = new Wear(activities)
  const statsCombat = new StatsCombat(statsBasic, leveler, wear, activities)
  const oldStats = statsCombat.current

  activities.add(activityFabric('buff', 'Haste', 1n))

  console.assert(statsCombat.current.Speed > oldStats.Speed)

  activities.removeAll()
}

увеличиваются_ли_статы_при_повышении_левела()
увеличиваются_ли_статы_при_надевании_шмота()
увеличиваются_ли_статы_при_бафе()
