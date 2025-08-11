import StatsCombat from './StatsCombat.js'
import statsBasic from '../../dicts/statsBasic.js'
import Activities from './Activities.js'
import Abilities from './Abilities.js'
import Inventory from './Inventory.js'
import Subject from '../Subject.js'
import Leveler from './Leveler.js'
import Target from './Target.js'
import Social from './Social.js'
import Health from './Health.js'
import Fight from './Fight.js'
import Mana from './Mana.js'

export default class Character extends Subject {
  constructor({ race, kind }) {
    super()
    this.race = race
    this.kind = kind
    this.activities = new Activities()
    this.leveler = new Leveler()
    this.target = new Target(this.coords)
    this.social = new Social(this.leveler)
    this.inventory = new Inventory(this.activities)
    this.statsCombat = new StatsCombat(
      this.statsBasic,
      this.leveler,
      this.inventory.wear,
      this.activities
    )
    this.health = new Health(this.statsCombat, this.leveler, this.activities)
    this.mana = new Mana(this.statsCombat, this.leveler, this.activities)
    this.fight = new Fight(
      this.activities,
      this.statsCombat,
      this.target,
      this.health,
      this.social
    )
    this.abilities = new Abilities(
      this.activities,
      this.target,
      this.health,
      this.mana
    )
  }

  get statsBasic() {
    return { ...statsBasic[this.race ?? 'x'][this.kind ?? 'x'] }
  }

  destroy() {
    this.social.destroy()
    this.activities.removeAll()
  }
}
