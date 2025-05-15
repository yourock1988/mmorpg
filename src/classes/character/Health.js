import EventEmitter from 'node:events'

export default class Health extends EventEmitter {
  constructor(statsBasic, leveler, activities) {
    super()
    this.statsBasic = statsBasic ?? { CON: 50n }
    this.leveler = leveler ?? { lvl: 5n }
    this.leveler.on?.('update:lvl', this.restore.bind(this))
    this.activities = activities
    this.activities.interlinkedWithinHealth(this)
    this.current = this.total
    this.protoTotal = 0n
  }

  get total() {
    this.protoTotal = this.statsBasic.CON * 3n * this.leveler.lvl
    this.activities.enforces.forEach(e => e.toHealth?.(this))
    if (this.current > this.protoTotal) this.current = this.protoTotal
    return this.protoTotal
  }

  lose(hp) {
    if (hp <= 0n) return
    this.current -= hp
    if (this.current <= 0n) {
      this.current = 0n
      this.emit('life-is-over')
    }
  }

  gain(hp) {
    if (hp <= 0n) return
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
    return this.current > 0n
  }
}
