import Activity from '../Activity.js'
import aurasActivitiesList from '../lists/aurasActivitiesList.js'

export default function auraActivityFabric(caption, level) {
  const findedActivity = aurasActivitiesList.find(
    a => a.caption === caption && a.level === level
  )
  if (!findedActivity) throw new Error(`wrong aura`)
  const activityClone = {
    ...findedActivity,
    config: { ...findedActivity.config },
    status: { ...findedActivity.status },
    enforce: { ...findedActivity.enforce },
    pulse: { ...findedActivity.pulse },
    type: 'aura',
  }
  return new Activity(activityClone)
}
