import viewCharacter from '../functions/viewCharacter.js'
import calcDamage from '../functions/calcDamage.js'

export default class FightHalf {
  constructor(attacker, defender) {
    this.attacker = attacker
    this.defender = defender
  }

  get damage() {
    const d = calcDamage(
      this.attacker.statsCombat.PAtk,
      this.defender.statsCombat.PDef
    )
    console.log(`${this.defender.nick} получает урон ${d}!`)
    return d
  }

  autoAttack() {
    this.attack()
    const delay = 200000 / Number(this.attacker.statsCombat.AtkSpd)
    this.interval = setInterval(this.attack.bind(this), delay)
  }

  attack() {
    console.log(`${this.attacker.nick} хочет атаковать ${this.defender.nick}`)
    if (this.isWrongAttacker) return
    if (this.isWrongDefender) return
    console.log(`${this.attacker.nick} атакует!`)
    this.defender.health.lose(this.damage)
    this.result()
    viewCharacter(this.attacker)
    viewCharacter(this.defender)
  }

  result() {
    if (this.defender.health.isLive) return
    clearInterval(this.interval)
    console.log(`${this.defender.nick} погибнул!`)
    console.log(`${this.attacker.nick} получает ${100n} опыта и ${50n} очков`)
    this.attacker.leveler.receiveExp(100n)
    this.attacker.trainedSkills.sp += 50n
  }

  get isWrongAttacker() {
    if (this.attacker.health.isLive) return false
    clearInterval(this.interval)
    console.log('мертвые не могут атаковать')
    return true
  }

  get isWrongDefender() {
    if (this.defender.health.isLive) {
      return false
    }
    console.log('неправильная цель')
    return true
  }
}
