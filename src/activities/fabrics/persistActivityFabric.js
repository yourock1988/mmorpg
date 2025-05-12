import Activity from '../../classes/Activity.js'
import persistsActivitiesList from '../lists/persistsActivitiesList.js'

export default function persistActivityFabric(caption, level) {
  const findedPersist = persistsActivitiesList.find(
    b => b.caption === caption && b.level === level
  )
  if (!findedPersist) throw new Error(`wrong persist`)
  const persist = Object.assign({}, findedPersist, { type: 'persist' })
  return new Activity(persist)
}
