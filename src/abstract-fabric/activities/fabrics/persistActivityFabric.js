import Activity from '../Activity.js'
import persistsActivitiesList from '../lists/persistsActivitiesList.js'

export default function persistActivityFabric(caption, level) {
  const findedActivity = persistsActivitiesList.find(
    p => p.caption === caption && p.level === level
  )
  if (!findedActivity) throw new Error(`wrong persist`)
  const activityClone = {
    ...findedActivity,
    config: { ...findedActivity.config },
    status: { ...findedActivity.status },
    enforce: { ...findedActivity.enforce },
    pulse: { ...findedActivity.pulse },
    type: 'persist',
  }
  return new Activity(activityClone)
}
