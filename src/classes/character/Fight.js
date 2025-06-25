import wait from '../../functions/wait.js'
import calcIsHit from '../../functions/calcIsHit.js'
import calcDamage from '../../functions/calcDamage.js'
import calcDelayAttack from '../../functions/calcDelayAttack.js'

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

  sendDamage(type = 'phys', value = this.statsCombat.current.PAtk) {
    if (this.checkAttacker && this.checkDefender) {
      const isHit = calcIsHit(this.statsCombat, this.target.subject.statsCombat)
      if (!isHit) {
        // console.log('промах')
        return
      }
      // console.log(`${this.attacker.nick} атакует!`)
      const statusHealth = this.target.subject.fight.receiveDamage(type, value)
      this.result(statusHealth)
    }
  }

  receiveDamage(type, value) {
    const dmg = calcDamage(value, this.statsCombat.current.PDef)
    // console.log('получено урона', dmg)
    return this.health.lose(dmg)
  }

  async attack() {
    // console.log(`${this.attacker.nick}хочет атаковать${this.defender.nick}`)
    if (this.checkAttacker && this.checkDefender) {
      await this.target.goto()
      await wait(calcDelayAttack(this.statsCombat))
      this.sendDamage()
      return true
    }
    return false
  }

  async autoAttack() {
    if (await this.attack()) await this.autoAttack()
  }

  result(statusHealth) {
    if (statusHealth === 'damage_taken') {
      this.social.isFighting = true
    }
    if (statusHealth === 'killed_now') {
      clearInterval(this.intervalId)
      // console.log('погибнул')
      const subject = this.target.subject
      this.social.postmortem(subject.social, subject.health.total)
    }
    if (statusHealth === 'already_dead') {
      clearInterval(this.intervalId)
      // console.log('неправильная цель')
      return
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
