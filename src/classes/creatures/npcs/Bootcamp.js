import abilityFabric from '../../../abstract-fabric/abilities/abilityFabric.js'
import getAbilityTypeByCaption from '../../../functions/getAbilityTypeByCaption.js'
import getAvailableForTrainAbilities from '../../../functions/getAvailableForTrainAbilities.js'
import Npc from '../Npc.js'

export default class Bootcamp extends Npc {
  constructor(character) {
    super({ title: 'Bootcamp' })
    this.character = character
  }

  get availableAbilities() {
    return getAvailableForTrainAbilities(this.character)
  }

  async selectAbility(caption, level) {
    if (!this.availableAbilities.find(([c]) => c === caption)) return
    const type = getAbilityTypeByCaption(caption)
    await this.trainAbility(type, caption, level)
  }

  async trainAbility(type, caption, level) {
    const ability = abilityFabric(type, caption, level)
    if (ability.cost.sp > this.character.social.sp) return //console.log('low sp')
    this.character.social.sp -= ability.cost.sp
    await this.character.abilities.learn(ability)
  }
}
