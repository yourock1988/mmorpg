import calcStatsCombat from '../../functions/calcStatsCombat.js'
import listStatsBasic from '../../lists/listStatsBasic.js'
import Inventory from './Inventory.js'
import Leveler from './Leveler.js'
import Health from './Health.js'
import Mana from './Mana.js'
import randomId from '../../functions/randomId.js'

export default class Character {
  constructor(nick, race, kind, prof) {
    this.id = randomId()
    this.nick = nick
    this.race = race
    this.kind = kind
    this.prof = prof
    this.inventory = new Inventory()
    this.leveler = new Leveler()
    this.health = new Health(this.statsBasic, this.leveler)
    this.mana = new Mana(this.statsBasic, this.leveler)
    this.passiveSkills = []
    this.activeSkills = []
    this.debuffs = []
    this.buffs = []
    this.statsActivity = []
    this.partyId = 0n
    this.clanId = 0n
    this.money = 0n
    this.sp = 0n
    this.leveler.on('update:lvl', lvl =>
      console.log(`${this.nick} перешел на уровень ${lvl}`)
    )
  }

  get statsBasic() {
    return listStatsBasic[this.race][this.kind]
  }

  get statsCombat() {
    const protoStatsCombat = calcStatsCombat(
      this.statsBasic,
      this.leveler.lvl,
      this.inventory.wear.stats
    )
    this.buffs.forEach(buff => buff.nForce2Combat?.(protoStatsCombat))
    this.debuffs.forEach(buff => buff.nForce2Combat?.(protoStatsCombat))
    return protoStatsCombat
  }
}
