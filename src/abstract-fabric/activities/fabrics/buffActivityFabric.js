import Activity from '../Activity.js'
import buffsActivitiesList from '../lists/buffsActivitiesList.js'

export default function buffActivityFabric(caption, level) {
  const findedActivity = buffsActivitiesList.find(
    a => a.caption === caption && a.level === level
  )
  if (!findedActivity) throw new Error(`wrong buff`)
  const activityClone = {
    ...findedActivity,
    config: { ...findedActivity.config },
    status: { ...findedActivity.status },
    enforce: { ...findedActivity.enforce },
    pulse: { ...findedActivity.pulse },
    type: 'buff',
  }
  return new Activity(activityClone)
}
