import buffActivityFabric from '../../src/abstract-fabric/activities/fabrics/buffActivityFabric.js'
import buffsActivitiesList from '../../src/abstract-fabric/activities/lists/buffsActivitiesList.js'
import getMock from '../mock.js'

const mock = getMock()

const buff = buffActivityFabric('Heart Of Lion', 1n)
console.assert(
  buff.desc === 'увеличивает точность, макс хп и реген. потребляет мп'
)

console.assert(buff.config !== buffsActivitiesList.status)
console.assert(buff.status !== buffsActivitiesList.status)
console.assert(buff.enforce !== buffsActivitiesList.status)
console.assert(buff.pulse !== buffsActivitiesList.status)
console.assert(buff.type !== buffsActivitiesList.status)
console.assert(buff.status.pulseIntervalId === 0)

buff.pulseStart({}, { gain: mock.fn() }, { lose: mock.fn() })
console.assert(buff.status.pulseIntervalId !== 0)

setTimeout(() => {
  buff.pulseStop()
  console.assert(buff.status.pulseIntervalId === 0)
  console.assert(mock.isAllHasBeenCalled())
}, 1000)
