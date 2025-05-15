import Activity from '../../../classes/Activity.js'
import equipmentsActivitiesList from '../lists/equipmentsActivitiesList.js'

export default function equipmentActivityFabric(caption) {
  const findedActivity = equipmentsActivitiesList.find(
    e => e.caption === caption
  )
  if (!findedActivity) throw new Error(`wrong aura`)
  const activity = Object.assign({}, findedActivity, { type: 'equipment' })
  return new Activity(activity)
}
