import EventEmitter from 'node:events'
import activityFabric from '../../abstract-fabric/activities/activityFabric.js'
import { round } from '../../functions/utils.js'

export default class Mana extends EventEmitter {
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
    this.activities.interlinkedWithinMana(this)
    this.activities.add(activityFabric('persist', 'Natural MP Regeneration'))
  }

  get total() {
    this.protoTotal = this.statsCombat.current.mpTotal
    this.activities.enforces.forEach(e => e.toMana?.(this))
    this.protoTotal = round(this.protoTotal)
    if (this.current > this.protoTotal) this.current = this.protoTotal
    return this.protoTotal
  }

  lose(mp) {
    if (mp <= 0) return
    this.current -= mp
    this.current = round(this.current)
    if (this.current <= 0) {
      this.current = 0
      this.emit('mana-is-over')
    }
  }

  gain(mp) {
    if (mp <= 0) return
    this.current += mp
    this.current = round(this.current)
    if (this.current > this.total) this.current = this.total
  }

  restore() {
    this.current = this.total
  }

  forceDrain() {
    this.lose(this.current)
  }
}
