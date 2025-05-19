import Activity from '../Activity.js'
import equipmentsActivitiesList from '../lists/equipmentsActivitiesList.js'

export default function equipmentActivityFabric(caption) {
  const findedActivity = equipmentsActivitiesList.find(
    e => e.caption === caption
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
