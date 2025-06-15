import abilityDict from '../../../../src/abstract-fabric/abilities/abilityDict.js'
import abilityFabric from '../../../../src/abstract-fabric/abilities/abilityFabric.js'

const srcBuff = abilityDict['buffs'].find(b => b.caption === 'Heart Of Lion')
const buff = abilityFabric('buff', 'Heart Of Lion', 1n)

console.assert(buff.id)
console.assert(buff.type === 'buff')
console.assert(buff.caption === 'Heart Of Lion')
console.assert(buff.level === 1n)
console.assert(
  buff.desc === 'увеличивает точность, макс хп и реген. потребляет мп'
)

console.assert(buff.cost !== srcBuff.cost)
console.assert(buff.config !== srcBuff.status)
console.assert(buff.status !== srcBuff.status)
console.assert(buff.cost.hp === 0)
console.assert(buff.config.massRange === 0)
console.assert(buff.status.cooldownCurrent === 0)
