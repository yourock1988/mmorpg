import EventEmitter from 'node:events'
import activityFabric from '../../abstract-fabric/activities/activityFabric.js'

export default class Health extends EventEmitter {
  constructor(statsCombat, leveler, activities) {
    super()
    this.statsCombat = statsCombat
    this.leveler = leveler
    this.leveler.on?.('update:lvl', this.restore.bind(this))
    this.activities = activities
    this.activities.interlinkedWithinHealth(this)
    this.current = this.total
    this.protoTotal = 0
    this.activities.add(
      activityFabric('persist', 'Natural HP Regeneration', 1n)
    )
  }

  get total() {
    this.protoTotal = this.statsCombat.current.hpTotal
    this.activities.enforces.forEach(e => e.toHealth?.(this))
    if (this.current > this.protoTotal) this.current = this.protoTotal
    return this.protoTotal
  }

  lose(hp) {
    if (hp <= 0) return
    this.current -= hp
    if (this.current <= 0) {
      this.current = 0
      this.emit('life-is-over')
    }
  }

  gain(hp) {
    if (hp <= 0) return
    this.current += hp
    if (this.current > this.total) this.current = this.total
  }

  restore() {
    this.current = this.total
  }

  forceDeath() {
    this.lose(this.current)
  }

  get isLive() {
    return this.current > 0
  }
}
