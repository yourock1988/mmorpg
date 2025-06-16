import Activities from '../../../../src/classes/character/Activities.js'
import Leveler from '../../../../src/classes/character/Leveler.js'
import Mana from '../../../../src/classes/character/Mana.js'
import StatsCombat from '../../../../src/classes/character/StatsCombat.js'
import Wear from '../../../../src/classes/character/Wear.js'
import statsBasic from '../../../../src/dicts/statsBasic.js'

function работает_ли_естественная_регенерация_мп() {
  const sb = { ...statsBasic.Orc.Fighter }
  const leveler = new Leveler()
  const wear = new Wear()
  const activities = new Activities()
  const statsCombat = new StatsCombat(sb, leveler, wear, activities)
  const mana = new Mana(statsCombat, leveler, activities)

  mana.lose(mana.total / 7)

  let oldMpCurrent = mana.current
  let intervalId = setInterval(() => {
    console.assert(mana.current > oldMpCurrent)
  }, 1100)

  setTimeout(() => {
    clearInterval(intervalId)
    activities.removeAll()
  }, 3500)
}

работает_ли_естественная_регенерация_мп()
