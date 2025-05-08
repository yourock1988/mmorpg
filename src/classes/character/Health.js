export default class Health {
  constructor(
    statsBasic,
    leveler,
    passiveSkills,
    activeSkills,
    buffs,
    debuffs,
    wear
  ) {
    this.statsBasic = statsBasic
    this.leveler = leveler
    this.passiveSkills = passiveSkills
    this.activeSkills = activeSkills
    this.buffs = buffs
    this.debuffs = debuffs
    this.wear = wear
    this.current = this.total
    this.leveler.on('update:lvl', this.restore.bind(this))
    this.protoTotal = 0n
  }

  get total() {
    this.protoTotal = this.statsBasic.CON * 3n * this.leveler.lvl
    this.passiveSkills?.forEach(ps => ps.nForce2Health?.(this))
    this.activeSkills?.forEach(as => as.nForce2Health?.(this))
    this.buffs?.forEach(buff => buff.nForce2Health?.(this))
    this.debuffs?.forEach(debuff => debuff.nForce2Health?.(this))
    this.wear?.nForces2Health.forEach(nForce => nForce?.(this))
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
