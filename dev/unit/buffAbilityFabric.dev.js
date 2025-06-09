import buffAbilityFabric from '../../src/abstract-fabric/abilities/fabrics/buffAbilityFabric.js'
import buffsAbilitiesList from '../../src/abstract-fabric/abilities/lists/buffsAbilitiesList.js'
import getMock from '../mock.js'

const mock = getMock()
const srcBuff = buffsAbilitiesList.find(b => b.caption === 'Heart Of Lion')

const buff = buffAbilityFabric('Heart Of Lion', 1n)

console.assert(buff.id)
console.assert(buff.caption === 'Heart Of Lion')
console.assert(buff.level === 1n)
console.assert(
  buff.desc === 'увеличивает точность, макс хп и реген. потребляет мп'
)

console.assert(buff.cost !== srcBuff.cost)
console.assert(buff.config !== srcBuff.status)
console.assert(buff.status !== srcBuff.status)
console.assert(buff.cost.hp === 0n)
console.assert(buff.config.massRange === 0)
console.assert(buff.status.cooldownCurrent === 0)
