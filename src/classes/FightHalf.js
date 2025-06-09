import viewCharacter from '../functions/viewCharacter.js'
import calcDamage from '../functions/calcDamage.js'

export default class FightHalf {
  constructor(attacker, defender, verbose) {
    this.attacker = attacker
    this.defender = defender
    this.v = verbose
  }

  get damage() {
    const d = calcDamage(
      this.attacker.statsCombat.PAtk,
      this.defender.statsCombat.PDef
    )
    this.v && console.log(`${this.defender.nick} получает урон ${d}!`)
    return d
  }

  autoAttack() {
    this.attack()
    const delay = 100000 / Number(this.attacker.statsCombat.AtkSpd)
    this.interval = setInterval(this.attack.bind(this), delay)
  }

  attack() {
    this.v &&
      console.log(`${this.attacker.nick} хочет атаковать ${this.defender.nick}`)
    if (this.isWrongAttacker) return
    if (this.isWrongDefender) return
    this.v && console.log(`${this.attacker.nick} атакует!`)
    this.defender.health.lose(this.damage)
    this.result()
    this.v && viewCharacter(this.attacker)
    this.v && viewCharacter(this.defender)
  }

  result() {
    if (this.defender.health.isLive) return
    clearInterval(this.interval)
    this.v && console.log(`${this.defender.nick} погибнул!`)
    this.v &&
      console.log(`${this.attacker.nick} получает ${100n} опыта и ${50n} очков`)
    this.attacker.leveler.receiveExp(100n)
    this.attacker.sp += 50n
  }

  get isWrongAttacker() {
    if (this.attacker.health.isLive) return false
    clearInterval(this.interval)
    this.v && console.log('мертвые не могут атаковать')
    return true
  }

  get isWrongDefender() {
    if (this.defender.health.isLive) {
      return false
    }
    this.v && console.log('неправильная цель')
    return true
  }
}
