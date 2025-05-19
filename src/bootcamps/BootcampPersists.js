import persistAbilityFabric from '../abstract-fabric/abilities/fabrics/persistAbilityFabric.js'
import persistsAbilitiesList from '../abstract-fabric/abilities/lists/persistsAbilitiesList.js'
import profAbilitiesCaptions from '../dicts/profAbilitiesCaptions.js'
import profHierarhy from '../dicts/profHierarhy.js'

export default class BootcampPersists {
  constructor(character) {
    this.character = character
    // const profs = profHierarhy.getProfsByProf(character.prof)
    // this.availableCaptions = profs.reduce(
    //   (acc, prof) => acc.concat(...profAbilitiesCaptions[prof]),
    //   []
    // )

    this.availableCaptions = ['Defensive Persist']
  }

  get availableAbilities() {
    return persistsAbilitiesList.filter(a =>
      this.availableCaptions.includes(a.caption)
    )
  }

  get availableAbilitiesSP() {
    return this.availableAbilities.map(a =>
      a.cost > this.character.sp ? (a.disabled = true) && a : a
    )
  }

  train(caption, level) {
    const persist = persistAbilityFabric(caption, level)
    if (persist.cost.sp > this.character.sp) return //console.log('low sp')
    this.character.sp -= persist.cost.sp
    this.character.abilities.learn(persist)
  }
}
