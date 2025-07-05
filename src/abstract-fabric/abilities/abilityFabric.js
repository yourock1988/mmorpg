import Ability from './Ability.js'
import abilityDict from './abilityDict.js'

// let l = Object.values(abilityDict).reduce((acc, item) => acc + item.length, 0)
// console.log(l)
// console.log(abilityDict.auras.length)
// console.log(abilityDict.buffs.length)
// console.log(abilityDict.debuffs.length)
// console.log(abilityDict.persists.length)
// console.log(abilityDict.skills.length)
// console.log(abilityDict.spells.length)

export default function abilityFabric(type, caption, level) {
  //! говнокостыль из-за отсутсвия BigInt в json
  const findFn = a => a.caption === caption && BigInt(a.level) === level
  const abilitiesList = abilityDict[type + 's']
  const findedAbility = abilitiesList.find(findFn)
  if (!findedAbility) throw new Error(`wrong ${type}`)
  const abilityClone = structuredClone(findedAbility)
  Object.assign(abilityClone, { type })
  return new Ability(abilityClone)
}
