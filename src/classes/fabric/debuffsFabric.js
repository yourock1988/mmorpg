import debuffsList from '../../lists/debuffsList.js'
import Activity from '../Activity.js'

export default function debuffsFabric(caption, level) {
  const debuff = debuffsList.find(
    b => b.caption === caption && b.level === level
  )
  Object.assign(debuff, { type: 'debuff' })
  return new Activity(debuff)
}
