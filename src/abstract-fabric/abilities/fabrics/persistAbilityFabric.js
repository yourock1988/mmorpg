import Ability from '../Ability.js'
import persistAbilitiesList from '../lists/persistsAbilitiesList.js'

export default function persistAbilityFabric(caption, level) {
  const findedAbility = persistAbilitiesList.find(
    a => a.caption === caption && a.level === level
  )
  if (!findedAbility) throw new Error(`wrong persist`)
  const abilityClone = structuredClone(findedAbility)
  Object.assign(abilityClone, { type: 'persist' })
  return new Ability(abilityClone)
}
