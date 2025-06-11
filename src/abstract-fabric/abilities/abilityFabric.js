import Ability from './Ability.js'
import abilityDict from './abilityDict.js'

export default function abilityFabric(type, caption, level) {
  const findFn = a => a.caption === caption && a.level === level
  const ablitiesList = abilityDict[type + 's']
  const findedAbility = ablitiesList.find(findFn)
  if (!findedAbility) throw new Error(`wrong ${type}`)
  const abilityClone = structuredClone(findedAbility)
  Object.assign(abilityClone, { type })
  return new Ability(abilityClone)
}
