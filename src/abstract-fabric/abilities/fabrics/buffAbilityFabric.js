import Ability from '../Ability.js'
import buffsAbilitiesList from '../lists/buffsAbilitiesList.js'

export default function buffAbilityFabric(caption, level) {
  const findedAbility = buffsAbilitiesList.find(
    a => a.caption === caption && a.level === level
  )
  if (!findedAbility) throw new Error(`wrong buff`)
  const abilityClone = structuredClone(findedAbility)
  Object.assign(abilityClone, { type: 'buff' })
  return new Ability(abilityClone)
}
