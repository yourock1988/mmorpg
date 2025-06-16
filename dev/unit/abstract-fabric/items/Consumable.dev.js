import Wear from '../../../../src/classes/character/Wear.js'
import Cargo from '../../../../src/classes/character/Cargo.js'
import Health from '../../../../src/classes/character/Health.js'
import Leveler from '../../../../src/classes/character/Leveler.js'
import statsBasic from '../../../../src/dicts/statsBasic.js'
import Activities from '../../../../src/classes/character/Activities.js'
import StatsCombat from '../../../../src/classes/character/StatsCombat.js'
import consumableFabric from '../../../../src/abstract-fabric/items/fabrics/consumableFabric.js'

const sb = { ...statsBasic.Orc.Fighter }
const leveler = new Leveler()
const activities = new Activities()
const wear = new Wear(activities)
const cargo = new Cargo(activities)
const statsCombat = new StatsCombat(sb, leveler, wear, activities)
const consumableItem = consumableFabric('Healing Potion')
const health = new Health(statsCombat, leveler, activities)
health.lose(health.current / 3)

cargo.consumeItem(consumableItem)

let oldHpCurrent = health.current
const intervalId = setInterval(() => {
  console.assert(health.current > oldHpCurrent)
  oldHpCurrent = health.current
}, consumableItem.activity.config.pulseIntervalDelay + 10)

setTimeout(() => {
  clearInterval(intervalId)
  activities.removeAll()
}, 2100)
