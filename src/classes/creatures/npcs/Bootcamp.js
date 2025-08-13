import abilityFabric from '../../../abstract-fabric/abilities/abilityFabric.js'
import getAbilityTypeByCaption from '../../../functions/getAbilityTypeByCaption.js'
import getAvailableForTrainAbilities from '../../../functions/getAvailableForTrainAbilities.js'
import Npc from '../Npc.js'

export default class Bootcamp extends Npc {
  constructor() {
    super({ title: 'Bootcamp' })
    this.npc = 'bootcamp'
  }

  get availableAbilities() {
    return getAvailableForTrainAbilities(this.target.subject)
  }

  async selectAbility(caption, level) {
    if (!this.availableAbilities.find(([c]) => c === caption)) return
    const type = getAbilityTypeByCaption(caption)
    await this.trainAbility(type, caption, level)
  }

  async trainAbility(type, caption, level) {
    const ability = abilityFabric(type, caption, level)
    if (ability.cost.sp > this.target.subject.social.sp) return //console.log('low sp')
    this.target.subject.social.sp -= ability.cost.sp
    await this.target.subject.abilities.learn(ability)
  }
}
