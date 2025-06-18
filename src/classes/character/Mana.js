import activityFabric from '../../abstract-fabric/activities/activityFabric.js'
import { round } from '../../functions/utils.js'

export default class Mana {
  constructor(statsCombat, leveler, activities) {
    this.statsCombat = statsCombat
    this.leveler = leveler
    this.activities = activities
    this.protoTotal = 0
    this.current = this.total
    this.init()
  }

  init() {
    this.activities.mana = this
    this.activities.add(activityFabric('persist', 'Natural MP Regeneration'))
    this.leveler.on?.('update:lvl', this.forceRestore.bind(this))
  }

  get total() {
    this.protoTotal = this.statsCombat.current.mpTotal
    this.activities.enforces.forEach(e => e.toMana?.(this))
    this.protoTotal = round(this.protoTotal)
    if (this.current > this.protoTotal) this.current = this.protoTotal
    return this.protoTotal
  }

  lose(mp) {
    if (mp > 0) this.current = round(this.current - mp)
    if (this.current <= 0) {
      this.current = 0
      this.activities.removeByTypes(['auras'])
      return false
    }
    return true
  }

  gain(mp) {
    if (mp > 0) this.current = round(this.current + mp)
    if (this.current > this.total) this.current = this.total
  }

  forceRestore() {
    this.current = this.total
  }

  forceDrain() {
    this.lose(this.current)
  }
}
