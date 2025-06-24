import activityFabric from '../../abstract-fabric/activities/activityFabric.js'
import { round } from '../../functions/utils.js'

export default class Health {
  constructor(statsCombat, leveler, activities) {
    this.statsCombat = statsCombat
    this.leveler = leveler
    this.activities = activities
    this.protoTotal = 0
    this.current = this.total
    this.init()
  }

  init() {
    this.activities.health = this
    this.activities.add(activityFabric('persist', 'Natural HP Regeneration'))
    this.leveler.on?.('update:lvl', this.forceRestore.bind(this))
  }

  get total() {
    this.protoTotal = this.statsCombat.current.hpTotal
    this.activities.enforces.forEach(e => e.toHealth?.(this))
    this.protoTotal = round(this.protoTotal)
    if (this.current > this.protoTotal) this.current = this.protoTotal
    return this.protoTotal
  }

  lose(hp) {
    if (!this.isLive) return 'already_dead'
    if (hp > 0) this.current = round(this.current - hp)
    if (this.current <= 0) {
      this.current = 0
      this.activities.removeAll()
      return 'killed_now'
    }
    return 'damage_taken'
  }

  gain(hp) {
    if (hp > 0) this.current = round(this.current + hp)
    if (this.current > this.total) this.current = this.total
  }

  forceRestore() {
    this.current = this.total
  }

  forceDeath() {
    this.lose(this.current)
  }

  get isLive() {
    return this.current > 0
  }
}
