import auraAbilityFabric from '../abstract-fabric/abilities/fabrics/auraAbilityFabric.js'
import aurasAbilitiesList from '../abstract-fabric/abilities/lists/aurasAbilitiesList.js'
import profAbilitiesCaptions from '../dicts/profAbilitiesCaptions.js'
import profHierarhy from '../dicts/profHierarhy.js'

export default class BootcampAuras {
  constructor(character) {
    this.character = character
    // const profs = profHierarhy.getProfsByProf(character.prof)
    // this.availableCaptions = profs.reduce(
    //   (acc, prof) => acc.concat(...profAbilitiesCaptions[prof]),
    //   []
    // )

    this.availableCaptions = ['Defensive Aura']
  }

  get availableAbilities() {
    return aurasAbilitiesList.filter(a =>
      this.availableCaptions.includes(a.caption)
    )
  }

  get availableAbilitiesSP() {
    return this.availableAbilities.map(a =>
      a.cost > this.character.sp ? (a.disabled = true) && a : a
    )
  }

  train(caption, level) {
    const aura = auraAbilityFabric(caption, level)
    if (aura.cost.sp > this.character.sp) return //console.log('low sp')
    this.character.sp -= aura.cost.sp
    this.character.abilities.learn(aura)
  }
}
