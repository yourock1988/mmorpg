export default class Health {
  constructor(statsBasic, leveler, activities) {
    this.statsBasic = statsBasic
    this.leveler = leveler
    this.activities = activities
    this.current = this.total
    this.leveler.on('update:lvl', this.restore.bind(this))
    this.protoTotal = 0n
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
    if (this.current < 0n) this.current = 0n
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
