import Ability from '../Ability.js'
import aurasAbilitiesList from '../lists/aurasAbilitiesList.js'

export default function auraAbilityFabric(caption, level) {
  const findedAbility = aurasAbilitiesList.find(
    a => a.caption === caption && a.level === level
  )
  if (!findedAbility) throw new Error(`wrong aura`)
  const abilityClone = structuredClone(findedAbility)
  Object.assign(abilityClone, { type: 'aura' })
  return new Ability(abilityClone)
}
