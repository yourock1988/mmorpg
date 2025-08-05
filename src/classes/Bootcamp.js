import abilityFabric from '../abstract-fabric/abilities/abilityFabric.js'
import getAbilityTypeByCaption from '../functions/getAbilityTypeByCaption.js'
import getAvailableForTrainAbilities from '../functions/getAvailableForTrainAbilities.js'

export default class Bootcamp {
  constructor(character) {
    this.character = character
  }

  get availableAbilities() {
    return getAvailableForTrainAbilities(this.character)
  }

  async selectAbility(caption, level) {
    const type = getAbilityTypeByCaption(caption)
    await this.train(type, caption, level)
  }

  async train(type, caption, level) {
    const ability = abilityFabric(type, caption, level)
    if (ability.cost.sp > this.character.social.sp) return //console.log('low sp')
    this.character.social.sp -= ability.cost.sp
    await this.character.abilities.learn(ability)
  }
}
