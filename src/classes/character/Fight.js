import calcDamage from '../../functions/calcDamage.js'
import wait from '../../functions/wait.js'

export default class Fight {
  constructor(activities, statsCombat, target, health, social) {
    this.activities = activities
    this.statsCombat = statsCombat
    this.target = target
    this.health = health
    this.social = social
    this.intervalId = null
    this.init()
  }

  init() {
    this.activities.fight = this
  }

  async sendDamage(type = 'phys', value = this.statsCombat.current.PAtk) {
    await wait(Math.trunc(1000 / this.statsCombat.AtkSpd))
    if (this.checkAttacker && this.checkDefender) {
      // console.log(`${this.attacker.nick} атакует!`)
      const status = this.target.subject.fight.receiveDamage(type, value)
      if (status === 'killed_now') {
        //
        social.kill(targetSocial, targetHpTotal)
      }
      this.result(status)
    }
  }

  receiveDamage(type, value) {
    const dmg = calcDamage(value, this.statsCombat.current.PDef)
    // console.log('получено урона', dmg)
    return this.health.lose(dmg)
  }

  async attack() {
    // console.log(`${this.attacker.nick}хочет атаковать${this.defender.nick}`)
    if (!this.checkDefender) return
    await this.target.goto()
    await this.sendDamage()
  }

  result(status) {
    if (status === 'damage_taken') return
    if (status === 'already_dead') {
      clearInterval(this.intervalId)
      // console.log('неправильная цель')
      return
    }
    if (status === 'killed_now') {
      this.leveler.receiveExp(100n)
      // this.sp += 50n
      // console.log(`${defender.nick} погибнул!`)
      // console.log(`${attacker.nick} получает ${100n} опыта и ${50n} очков`)
    }
  }

  get checkAttacker() {
    if (this.health.isLive) return true
    clearInterval(this.intervalId)
    // console.log('мертвые не могут атаковать')
    return false
  }

  get checkDefender() {
    if (this.target.hasTarget && this.target.subject.health?.isLive) return true
    clearInterval(this.intervalId)
    // console.log('неправильная цель')
    return false
  }
}
