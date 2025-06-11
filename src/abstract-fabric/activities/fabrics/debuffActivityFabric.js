import Activity from '../Activity.js'
import debuffsActivitiesList from '../lists/debuffsActivitiesList.js'

export default function debuffActivityFabric(caption, level) {
  const findedActivity = debuffsActivitiesList.find(
    a => a.caption === caption && a.level === level
  )
  if (!findedActivity) throw new Error(`wrong debuff`)
  const activityClone = {
    ...findedActivity,
    config: { ...findedActivity.config },
    status: { ...findedActivity.status },
    enforce: { ...findedActivity.enforce },
    pulse: { ...findedActivity.pulse },
    type: 'debuff',
  }
  return new Activity(activityClone)
}
