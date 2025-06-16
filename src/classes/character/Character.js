import StatsCombat from './StatsCombat.js'
import statsBasic from '../../dicts/statsBasic.js'
import Activities from './Activities.js'
import Abilities from './Abilities.js'
import Inventory from './Inventory.js'
import randomId from '../../functions/randomId.js'
import Leveler from './Leveler.js'
import Target from './Target.js'
import Coords from './Coords.js'
import Health from './Health.js'
import Mana from './Mana.js'

export default class Character {
  constructor(nick, race, kind, prof) {
    this.id = randomId()
    this.type = 'character'
    this.nick = nick
    this.race = race
    this.kind = kind
    this.prof = prof
    this.partyId = 0n
    this.clanId = 0n
    this.money = 0n
    this.sp = 0n
    this.activities = new Activities()
    this.leveler = new Leveler()
    this.coords = new Coords()
    this.target = new Target(this.coords)
    this.inventory = new Inventory(this.activities)
    this.statsCombat = new StatsCombat(
      this.statsBasic,
      this.leveler,
      this.inventory.wear,
      this.activities
    )
    this.health = new Health(this.statsCombat, this.leveler, this.activities)
    this.mana = new Mana(this.statsCombat, this.leveler, this.activities)
    this.abilities = new Abilities(
      this.activities,
      this.target,
      this.health,
      this.mana
    )
  }

  get statsBasic() {
    return { ...statsBasic[this.race][this.kind] }
  }
}
