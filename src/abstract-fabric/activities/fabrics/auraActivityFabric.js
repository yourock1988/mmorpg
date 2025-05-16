import Activity from '../Activity.js'
import aurasActivitiesList from '../lists/aurasActivitiesList.js'

export default function auraActivityFabric(caption, level) {
  const findedAura = aurasActivitiesList.find(
    a => a.caption === caption && a.level === level
  )
  if (!findedAura) throw new Error(`wrong aura`)
  const aura = Object.assign({}, findedAura, { type: 'aura' })
  return new Activity(aura)
}
