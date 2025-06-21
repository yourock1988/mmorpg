import Activity from './Activity.js'
import activityDict from './activityDict.js'

export default function activityFabric(type, caption, level = 1n) {
  const findFn = a => a.caption === caption && a.level === level
  const activitiesList = activityDict[type + 's']
  const findedActivity = activitiesList.find(findFn)
  if (!findedActivity) throw new Error(`wrong ${type}`)
  const activityClone = {
    ...findedActivity,
    config: { ...findedActivity.config },
    status: { ...findedActivity.status },
    enforce: { ...findedActivity.enforce },
    pulse: { ...findedActivity.pulse },
    once: { ...findedActivity.once },
    type,
  }
  return new Activity(activityClone)
}
