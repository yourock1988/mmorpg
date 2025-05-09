import buffsList from '../../lists/buffsList.js'
import Activity from '../Activity.js'

export default function buffsFabric(caption, level) {
  const buff = buffsList.find(b => b.caption === caption && b.level === level)
  Object.assign(buff, { type: 'buff' })
  return new Activity(buff)
}
