import calcDamage from '../../functions/calcDamage.js'

export default class Fight {
  constructor(activities, statsCombat, target, health) {
    this.activities = activities
    this.statsCombat = statsCombat
    this.target = target
    this.health = health
    this.init()
  }

  init() {
    this.activities.fight = this
  }

  sendDamage(type = 'phys', value = this.statsCombat.current.PAtk) {
    this.target.subject.fight.receiveDamage(type, value)
  }

  receiveDamage(type, value) {
    const dmg = calcDamage(value, this.statsCombat.current.PDef)
    // console.log('получено урона', dmg)
    this.health.lose(dmg)
  }
}
