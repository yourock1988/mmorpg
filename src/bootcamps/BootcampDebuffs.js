import debuffAbilityFabric from '../abstract-fabric/abilities/fabrics/debuffAbilityFabric.js'
import debuffsAbilitiesList from '../abstract-fabric/abilities/lists/debuffsAbilitiesList.js'
import profAbilitiesCaptions from '../dicts/profAbilitiesCaptions.js'
import profHierarhy from '../dicts/profHierarhy.js'

export default class BootcampDebuffs {
  constructor(character) {
    this.character = character
    // const profs = profHierarhy.getProfsByProf(character.prof)
    // this.availableCaptions = profs.reduce(
    //   (acc, prof) => acc.concat(...profAbilitiesCaptions[prof]),
    //   []
    // )

    this.availableCaptions = ['Curse Poison']
  }

  get availableAbilities() {
    return debuffsAbilitiesList.filter(a =>
      this.availableCaptions.includes(a.caption)
    )
  }

  get availableAbilitiesSP() {
    return this.availableAbilities.map(a =>
      a.cost > this.character.sp ? (a.disabled = true) && a : a
    )
  }

  async train(caption, level) {
    const debuff = debuffAbilityFabric(caption, level)
    if (debuff.cost.sp > this.character.sp) return //console.log('low sp')
    this.character.sp -= debuff.cost.sp
    await this.character.abilities.learn(debuff)
  }
}
