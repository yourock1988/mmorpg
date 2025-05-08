export default class Mana {
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
    this.protoTotal = this.statsBasic.MEN * this.leveler.lvl
    this.passiveSkills?.forEach(ps => ps.nForce2Mana?.(this))
    this.activeSkills?.forEach(as => as.nForce2Mana?.(this))
    this.buffs?.forEach(buff => buff.nForce2Mana?.(this))
    this.debuffs?.forEach(debuff => debuff.nForce2Mana?.(this))
    this.wear?.nForces2Mana.forEach(nForce => nForce?.(this))
    if (this.current > this.protoTotal) this.current = this.protoTotal
    return this.protoTotal
  }

  lose(mp) {
    if (mp <= 0n) return
    this.current -= mp
    if (this.current < 0n) this.current = 0n
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
