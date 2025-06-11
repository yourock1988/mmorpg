import Ability from '../Ability.js'
import debuffsAbilitiesList from '../lists/debuffsAbilitiesList.js'

export default function debuffAbilityFabric(caption, level) {
  const findedAbility = debuffsAbilitiesList.find(
    a => a.caption === caption && a.level === level
  )
  if (!findedAbility) throw new Error(`wrong debuff`)
  const abilityClone = structuredClone(findedAbility)
  Object.assign(abilityClone, { type: 'debuff' })
  return new Ability(abilityClone)
}
