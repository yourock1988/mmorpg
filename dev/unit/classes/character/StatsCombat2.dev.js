import sb2 from '../../../../src/dicts/statsBasic2.js'
import Wear from '../../../../src/classes/character/Wear.js'
import Leveler from '../../../../src/classes/character/Leveler.js'
import Activities from '../../../../src/classes/character/Activities.js'
import StatsCombat2 from '../../../../src/classes/character/statsCombat2.js'
import equipmentFabric from '../../../../src/abstract-fabric/items/fabrics/equipmentFabric2.js'

const statsBasic = { ...sb2.Orc.Fighter }
const activities = new Activities()
const leveler = new Leveler()
const wear = new Wear(activities)

const statsCombat = new StatsCombat2(statsBasic, leveler, wear, activities)

leveler.forceSetLevel(1n)

wear.mount(equipmentFabric('Axe Of Glory'))
wear.mount(equipmentFabric('Blade Of Blood'))

// wear.mount(equipmentFabric('Helmet Of Truth'))
// wear.mount(equipmentFabric('Gloves Of Monk'))

// console.log(statsCombat.current)
