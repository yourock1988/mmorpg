import profAbilitiesCaptions from '../../dicts/profAbilitiesCaptions.js'
import profHierarhy from '../../dicts/profHierarhy.js'
import abilitiesList from '../lists/abilitiesList.js'
import abilitiesFabric from './fabric/abilitiesFabric.js'

export default class BootcampAbilities {
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
    return abilitiesList.filter(a => this.availableCaptions.includes(a.caption))
  }

  get availableAbilitiesSP() {
    return this.availableAbilities.map(a =>
      a.cost > this.character.sp ? (a.disabled = true) && a : a
    )
  }

  train(caption, level) {
    const abilityToTrain = this.availableAbilitiesSP.find(
      aasp => aasp.caption === caption && aasp.level === level
    )
    if (abilityToTrain.cost <= this.character.sp) {
      this.character.sp -= abilityToTrain.cost
      const ability = abilitiesFabric(caption, level)
      this.character.abilities.train(ability)
    } else {
      console.log('не хватает спелл поинтов')
    }
  }
}
