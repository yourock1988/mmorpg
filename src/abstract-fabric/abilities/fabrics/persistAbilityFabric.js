import Ability from '../../../classes/Ability.js'
import persistAbilitiesList from '../lists/persistsAbilitiesList.js'

export default function persistAbilityFabric(caption, level) {
  const findedPersist = persistAbilitiesList.find(
    b => b.caption === caption && b.level === level
  )
  if (!findedPersist) throw new Error(`wrong persist`)
  const persist = Object.assign({}, findedPersist, { type: 'persist' })
  return new Ability(persist)
}
