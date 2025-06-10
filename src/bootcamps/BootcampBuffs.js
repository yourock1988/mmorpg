import buffAbilityFabric from '../abstract-fabric/abilities/fabrics/buffAbilityFabric.js'
import buffsAbilitiesList from '../abstract-fabric/abilities/lists/buffsAbilitiesList.js'
import profAbilitiesCaptions from '../dicts/profAbilitiesCaptions.js'
import profHierarhy from '../dicts/profHierarhy.js'

export default class BootcampBuffs {
  constructor(character) {
    this.character = character
    // const profs = profHierarhy.getProfsByProf(character.prof)
    // this.availableCaptions = profs.reduce(
    //   (acc, prof) => acc.concat(...profAbilitiesCaptions[prof]),
    //   []
    // )

    this.availableCaptions = ['Heart Of Lion']
  }

  get availableAbilities() {
    return buffsAbilitiesList.filter(a =>
      this.availableCaptions.includes(a.caption)
    )
  }

  get availableAbilitiesSP() {
    return this.availableAbilities.map(a =>
      a.cost > this.character.sp ? (a.disabled = true) && a : a
    )
  }

  async train(caption, level) {
    const buff = buffAbilityFabric(caption, level)
    if (buff.cost.sp > this.character.sp) return //console.log('low sp')
    this.character.sp -= buff.cost.sp
    await this.character.abilities.learn(buff)
  }
}
