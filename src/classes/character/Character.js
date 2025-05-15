import randomId from '../../functions/randomId.js'
import calcStatsCombat from '../../functions/calcStatsCombat.js'
import statsBasic from '../../dicts/statsBasic.js'
import Leveler from './Leveler.js'
import Activities from './Activities.js'
import Inventory from './Inventory.js'
import Abilities from './Abilities.js'
import Health from './Health.js'
import Mana from './Mana.js'

export default class Character {
  constructor(nick, race, kind, prof) {
    this.id = randomId()
    this.nick = nick
    this.race = race
    this.kind = kind
    this.prof = prof
    this.leveler = new Leveler()
    this.activities = new Activities()
    this.inventory = new Inventory(this.activities)
    this.abilities = new Abilities(this.activities)
    this.health = new Health(this.statsBasic, this.leveler, this.activities)
    this.mana = new Mana(this.statsBasic, this.leveler, this.activities)
    this.partyId = 0n
    this.clanId = 0n
    this.money = 0n
    this.sp = 0n
    this.leveler.on('update:lvl', lvl =>
      console.log(`${this.nick} перешел на уровень ${lvl}`)
    )
  }

  get statsBasic() {
    return statsBasic[this.race][this.kind]
  }

  get statsCombat() {
    const protoStatsCombat = calcStatsCombat(
      this.statsBasic,
      this.leveler.lvl,
      this.inventory.wear.stats
    )
    this.activities.enforces.forEach(e => e.toCombat?.(protoStatsCombat))
    return protoStatsCombat
  }
}
