// import abilityDict from '../abstract-fabric/abilities/abilityDict.js'
import abilityFabric from '../abstract-fabric/abilities/abilityFabric.js'
import profAbilitiesSheet from '../dicts/profAbilitiesSheet.js'
import profHierarhy from '../dicts/profHierarhy.js'

export default class Bootcamp {
  constructor(character) {
    this.character = character
  }

  get availableAbilities() {
    // return Object.entries(abilityDict)
    //   .flat()
    //   .filter(a => this.available.includes(a.caption))
  }

  get availableAbilitiesSP() {
    return this.availableAbilities.map(a =>
      a.cost > this.character.social.sp ? (a.disabled = true) && a : a
    )
  }

  async train(type, caption, level) {
    const ability = abilityFabric(type, caption, level)
    if (ability.cost.sp > this.character.social.sp) return //console.log('low sp')
    this.character.social.sp -= ability.cost.sp
    await this.character.abilities.learn(ability)
  }
}
