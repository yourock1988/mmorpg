import sb2 from '../../../../src/dicts/statsBasic.js'
import Wear from '../../../../src/classes/character/Wear.js'
import Leveler from '../../../../src/classes/character/Leveler.js'
import Activities from '../../../../src/classes/character/Activities.js'
import StatsCombat from '../../../../src/classes/character/StatsCombat.js'
import equipmentFabric from '../../../../src/abstract-fabric/items/fabrics/equipmentFabric.js'
import Health from '../../../../src/classes/character/Health.js'
import Mana from '../../../../src/classes/character/Mana.js'
import activityFabric from '../../../../src/abstract-fabric/activities/activityFabric.js'

const statsBasic = { ...sb2.Orc.Fighter }
const activities = new Activities()
const leveler = new Leveler()
const wear = new Wear(activities)
const statsCombat = new StatsCombat(statsBasic, leveler, wear, activities)
const health = new Health(statsCombat, leveler, activities)
const mana = new Mana(statsCombat, leveler, activities)
// console.log(activities)
// activities.interlinkedWithinHealth(health)
// activities.add(activityFabric('buff', 'Heart Of Lion', 1n))

leveler.forceSetLevel(1n)

wear.mount(equipmentFabric('Axe Of Glory'))
wear.mount(equipmentFabric('Blade Of Blood'))

// console.log(statsCombat.current)
// console.log(health.total)
// console.log(mana.total)
wear.mount(equipmentFabric('Helmet Of Truth'))
wear.mount(equipmentFabric('Gloves Of Monk'))
// console.log(health.total)
// console.log(mana.total)
// console.log(statsCombat.current)

setTimeout(() => {
  activities.removeAll()
  // console.log(activities.equipments)
}, 500)
