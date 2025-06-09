import Ability from '../Ability.js'
import buffsAbilitiesList from '../lists/buffsAbilitiesList.js'

export default function buffAbilityFabric(caption, level) {
  const findedAbiblity = buffsAbilitiesList.find(
    a => a.caption === caption && a.level === level
  )
  if (!findedAbiblity) throw new Error(`wrong buff`)
  const abilityClone = structuredClone(findedAbiblity)
  Object.assign(abilityClone, { type: 'buff' })
  return new Ability(abilityClone)
}
