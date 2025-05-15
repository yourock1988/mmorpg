import EventEmitter from 'node:events'

export default class Mana extends EventEmitter {
  constructor(statsBasic, leveler, activities) {
    super()
    this.statsBasic = statsBasic ?? { MEN: 50n }
    this.leveler = leveler ?? { lvl: 5n }
    this.leveler.on('update:lvl', this.restore.bind(this))
    this.activities = activities
    this.activities.interlinkedWithinMana(this)
    this.current = this.total
    this.protoTotal = 0n
  }

  get total() {
    this.protoTotal = this.statsBasic.MEN * 3n * this.leveler.lvl
    this.activities.enforces.forEach(e => e.toMana?.(this))
    if (this.current > this.protoTotal) this.current = this.protoTotal
    return this.protoTotal
  }

  lose(mp) {
    if (mp <= 0n) return
    this.current -= mp
    if (this.current <= 0n) {
      this.current = 0n
      this.emit('mana-is-over')
    }
  }

  gain(mp) {
    if (mp <= 0n) return
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
