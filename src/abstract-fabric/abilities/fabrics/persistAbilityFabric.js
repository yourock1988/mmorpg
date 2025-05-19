import Ability from '../Ability.js'
import persistAbilitiesList from '../lists/persistsAbilitiesList.js'

export default function persistAbilityFabric(caption, level) {
  const findedPersist = persistAbilitiesList.find(
    p => p.caption === caption && p.level === level
  )
  if (!findedPersist) throw new Error(`wrong persist`)
  const persistClone = structuredClone(findedPersist)
  Object.assign(persistClone, { type: 'persist' })
  return new Ability(persistClone)
}
