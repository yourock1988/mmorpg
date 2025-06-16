import Activities from '../../../../src/classes/character/Activities.js'
import Health from '../../../../src/classes/character/Health.js'
import Leveler from '../../../../src/classes/character/Leveler.js'
import StatsCombat from '../../../../src/classes/character/StatsCombat.js'
import Wear from '../../../../src/classes/character/Wear.js'
import statsBasic from '../../../../src/dicts/statsBasic.js'

function работает_ли_естественная_регенерация_хп() {
  const sb = { ...statsBasic.Orc.Fighter }
  const leveler = new Leveler()
  const wear = new Wear()
  const activities = new Activities()
  const statsCombat = new StatsCombat(sb, leveler, wear, activities)
  const health = new Health(statsCombat, leveler, activities)

  health.lose(health.total / 7)

  let oldHpCurrent = health.current
  let intervalId = setInterval(() => {
    console.assert(health.current > oldHpCurrent)
  }, 1100)

  setTimeout(() => {
    clearInterval(intervalId)
    activities.removeAll()
  }, 3500)
}

работает_ли_естественная_регенерация_хп()
