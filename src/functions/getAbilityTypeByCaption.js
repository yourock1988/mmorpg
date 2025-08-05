import abilityDict from '../abstract-fabric/abilities/abilityDict.js'

export default function getAbilityTypeByCaption(caption) {
  for (const type in abilityDict)
    if (abilityDict[type].find(a => a.caption === caption))
      return type.slice(0, -1)
}
