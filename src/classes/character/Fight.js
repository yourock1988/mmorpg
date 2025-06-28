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
    const { subject } = this.target
    if (!this.checkAttacker || !this.checkDefender) return false
    if (!calcIsHit(this.statsCombat, subject.statsCombat)) return true
    const statusHealth = subject.fight.receiveDamage(type, value)
    return this.checkDamage(statusHealth)
  }

  receiveDamage(type, value) {
    let dmg
    if (type === 'phys') dmg = calcDamage(value, this.statsCombat.current.PDef)
    if (type === 'magic') dmg = calcDamage(value, this.statsCombat.current.MDef)
    return this.health.lose(dmg)
  }

  async attack() {
    if (!this.checkAttacker || !this.checkDefender) return false
    await this.target.goto()
    await wait(calcDelayAttack(this.statsCombat))
    return this.sendDamage()
  }

  async autoAttack() {
    if (await this.attack()) await this.autoAttack()
  }

  checkDamage(statusHealth) {
    const subject = this.target.subject
    if (statusHealth !== 'already_dead') {
      if (subject.social) this.social.activateModePvP()
      if (!subject.social) this.social.activateModePvE()
    }
    if (statusHealth === 'killed_now') {
      this.social.postmortem(subject.social, subject.health.total)
    }
    if (statusHealth === 'damage_taken') {
      return true
    }
    clearInterval(this.intervalId)
    return false
  }

  get checkAttacker() {
    if (this.health.isLive) return true
    clearInterval(this.intervalId)
    return false
  }

  get checkDefender() {
    if (this.target.hasTarget && this.target.subject.health?.isLive) return true
    clearInterval(this.intervalId)
    return false
  }
}
