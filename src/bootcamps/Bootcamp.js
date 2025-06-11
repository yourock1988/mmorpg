import abilityDict from '../abstract-fabric/abilities/abilityDict.js'
import abilityFabric from '../abstract-fabric/abilities/abilityFabric.js'
import profAbilitiesCaptions from '../dicts/profAbilitiesCaptions.js'
import profHierarhy from '../dicts/profHierarhy.js'

export default class Bootcamp {
  constructor(character) {
    this.character = character
    // const profs = profHierarhy.getProfsByProf(character.prof)
    // this.availableCaptions = profs.reduce(
    //   (acc, prof) => acc.concat(...profAbilitiesCaptions[prof]),
    //   []
    // )

    this.availableCaptions = ['ability-caption']
  }

  get availableAbilities() {
    return Object.entries(abilityDict)
      .flat()
      .filter(a => this.availableCaptions.includes(a.caption))
  }

  get availableAbilitiesSP() {
    return this.availableAbilities.map(a =>
      a.cost > this.character.sp ? (a.disabled = true) && a : a
    )
  }

  async train(type, caption, level) {
    const ability = abilityFabric(type, caption, level)
    if (ability.cost.sp > this.character.sp) return //console.log('low sp')
    this.character.sp -= ability.cost.sp
    await this.character.abilities.learn(ability)
  }
}
