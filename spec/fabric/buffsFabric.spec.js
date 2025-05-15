import buffsFabric from '../../src/classes/fabric/buffsFabric.js'
import Activity from '../../src/abstract-fabric/activities/Activity.js'

const haste = buffsFabric('Haste', 1n)

console.log(haste)
console.assert(haste instanceof Activity)
console.assert(haste.caption === 'Haste' && haste.level === 1n)

const haste2 = buffsFabric('Haste', 1n)

console.assert(haste !== haste2 && haste.id !== haste2.id)
