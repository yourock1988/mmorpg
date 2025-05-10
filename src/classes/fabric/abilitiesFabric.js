import abilitiesList from '../../lists/abilitiesList.js'
import Activity from '../Activity.js'

export default function abilitiesFabric(caption, level) {
  const ability = abilitiesList.find(
    b => b.caption === caption && b.level === level
  )
  Object.assign(ability, { type: 'ability' })
  return new Activity(ability)
}
