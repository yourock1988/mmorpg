import Activities from '../../../src/classes/character/Activities.js'
import Leveler from '../../../src/classes/character/Leveler.js'
import StatsCombat from '../../../src/classes/character/StatsCombat.js'
import Wear from '../../../src/classes/character/Wear.js'
import Delayer from '../../../src/classes/Delayer.js'
import statsBasic from '../../../src/dicts/statsBasic.js'

const sb = { ...statsBasic.Orc.Fighter }
const activities = new Activities()
const leveler = new Leveler()
const wear = new Wear(activities)
const statsCombat = new StatsCombat(sb, leveler, wear, activities)
const delayer = new Delayer(statsCombat)

console.assert(statsCombat.current.AtkSpd === 156)
console.assert(delayer.spd2hold('AtkSpd', 100) === 781)

console.assert(statsCombat.current.CastSpd === 72)
console.assert(delayer.spd2hold('CastSpd', 100) === 1162)

console.assert(delayer.spd2hold('CastSpd', Infinity) === 0)
