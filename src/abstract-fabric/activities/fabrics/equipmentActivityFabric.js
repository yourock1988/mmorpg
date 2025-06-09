import Activity from '../Activity.js'
import equipmentsActivitiesList from '../lists/equipmentsActivitiesList.js'

export default function equipmentActivityFabric(caption, level) {
  const findedActivity = equipmentsActivitiesList.find(
    a => a.caption === caption && a.level === level
  )
  if (!findedActivity) throw new Error(`wrong equipment`)
  const activityClone = {
    ...findedActivity,
    config: { ...findedActivity.config },
    status: { ...findedActivity.status },
    enforce: { ...findedActivity.enforce },
    pulse: { ...findedActivity.pulse },
    type: 'equipment',
  }
  return new Activity(activityClone)
}
