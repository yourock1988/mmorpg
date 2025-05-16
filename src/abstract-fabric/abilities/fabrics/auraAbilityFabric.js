import Ability from '../Ability.js'
import aurasAbilitiesList from '../lists/aurasAbilitiesList.js'

export default function auraAbilityFabric(caption, level) {
  const findedAura = aurasAbilitiesList.find(
    a => a.caption === caption && a.level === level
  )
  if (!findedAura) throw new Error(`wrong aura`)
  const aura = Object.assign({}, findedAura, { type: 'aura' })
  return new Ability(aura)
}
