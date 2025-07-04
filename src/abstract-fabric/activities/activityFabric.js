import Activity from './Activity.js'
import activityDict from './activityDict.js'

// let l = Object.values(activityDict).reduce((acc, item) => acc + item.length, 0)
// console.log(l)
// console.log(activityDict.auras.length)
// console.log(activityDict.buffs.length)
// console.log(activityDict.consumables.length)
// console.log(activityDict.debuffs.length)
// console.log(activityDict.equipments.length)
// console.log(activityDict.persists.length)
// console.log(activityDict.skills.length)
// console.log(activityDict.spells.length)

export default function activityFabric(type, caption, level = 1n) {
  //! говнокостыль из-за отсутсвия BigInt в json
  const findFn = a => a.caption === caption && BigInt(a.level) === level
  const activitiesList = activityDict[type + 's']
  const findedActivity = activitiesList.find(findFn)
  if (!findedActivity) throw new Error(`wrong ${type}`)
  const activityClone = {
    ...findedActivity,
    config: { ...findedActivity.config },
    status: { ...findedActivity.status },
    enforce: { ...findedActivity.enforce },
    pulse: findedActivity.pulse && { ...findedActivity.pulse },
    once: findedActivity.once && { ...findedActivity.once },
    type,
  }
  return new Activity(activityClone)
}
