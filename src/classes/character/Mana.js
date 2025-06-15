import EventEmitter from 'node:events'

export default class Mana extends EventEmitter {
  constructor(statsCombat, leveler, activities) {
    super()
    this.statsCombat = statsCombat
    this.leveler = leveler
    this.leveler.on?.('update:lvl', this.restore.bind(this))
    this.activities = activities
    this.activities.interlinkedWithinMana(this)
    this.current = this.total
    this.protoTotal = 0
  }

  get total() {
    this.protoTotal = this.statsCombat.current.mpTotal
    this.activities.enforces.forEach(e => e.toMana?.(this))
    if (this.current > this.protoTotal) this.current = this.protoTotal
    return this.protoTotal
  }

  lose(mp) {
    if (mp <= 0) return
    this.current -= mp
    if (this.current <= 0) {
      this.current = 0
      this.emit('mana-is-over')
    }
  }

  gain(mp) {
    if (mp <= 0) return
    this.current += mp
    if (this.current > this.total) this.current = this.total
  }

  restore() {
    this.current = this.total
  }

  forceDrain() {
    this.lose(this.current)
  }
}
