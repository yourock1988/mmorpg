import EventEmitter from 'node:events'
import activityFabric from '../../abstract-fabric/activities/activityFabric.js'
import { round } from '../../functions/utils.js'

export default class Health extends EventEmitter {
  constructor(statsCombat, leveler, activities) {
    super()
    this.statsCombat = statsCombat
    this.leveler = leveler
    this.activities = activities
    this.protoTotal = 0
    this.current = this.total
    this.init()
  }

  init() {
    this.leveler.on?.('update:lvl', this.restore.bind(this))
    this.activities.interlinkedWithinHealth(this)
    this.activities.add(activityFabric('persist', 'Natural HP Regeneration'))
  }

  get total() {
    this.protoTotal = this.statsCombat.current.hpTotal
    this.activities.enforces.forEach(e => e.toHealth?.(this))
    this.protoTotal = round(this.protoTotal)
    if (this.current > this.protoTotal) this.current = this.protoTotal
    return this.protoTotal
  }

  lose(hp) {
    if (hp <= 0) return
    this.current -= hp
    this.current = round(this.current)
    if (this.current <= 0) {
      this.current = 0
      this.emit('life-is-over')
    }
  }

  gain(hp) {
    if (hp <= 0) return
    this.current += hp
    this.current = round(this.current)
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
