import EventEmitter from 'node:events'

export default class Health extends EventEmitter {
  constructor(statsBasic, leveler, activities) {
    super()
    this.statsBasic = statsBasic ?? { CON: 50n }
    this.leveler = leveler ?? { lvl: 5n }
    this.activities = activities
    this.protoTotal = 0n
    this.current = this.total
    this.leveler.on?.('update:lvl', this.restore.bind(this))
    activities.interlinkedWithinHealth(this)
  }

  get total() {
    this.protoTotal = this.statsBasic.CON * 3n * this.leveler.lvl
    this.activities.list.forEach(a => a.enforce.toHealth?.(this))
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
