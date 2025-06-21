import activityDict from '../../../../src/abstract-fabric/activities/activityDict.js'
import activityFabric from '../../../../src/abstract-fabric/activities/activityFabric.js'
import getMock from '../../../mock.js'

const mock = getMock()
const srcBuff = activityDict['buffs'].find(b => b.caption === 'Heart Of Lion')
const buff = activityFabric('buff', 'Heart Of Lion', 1n)

console.assert(buff.id)
console.assert(buff.type === 'buff')
console.assert(buff.caption === 'Heart Of Lion')
console.assert(buff.level === 1n)
console.assert(
  buff.desc === 'увеличивает точность, макс хп и реген. потребляет мп'
)

console.assert(buff.config !== srcBuff.config)
console.assert(buff.status !== srcBuff.status)
console.assert(buff.enforce !== srcBuff.enforce)
console.assert(buff.pulse !== srcBuff.pulse)
console.assert(buff.type !== srcBuff.type)
console.assert(buff.status.pulseIntervalId === 0)

buff.pulseStart({}, { gain: mock.fn() }, { lose: mock.fn() })
console.assert(buff.status.pulseIntervalId !== 0)

setTimeout(() => {
  buff.pulseStop()
  console.assert(buff.status.pulseIntervalId === 0)
  console.assert(mock.isAllHasBeenCalled())
}, 1000)
