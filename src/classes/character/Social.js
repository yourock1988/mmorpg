export default class Social {
  constructor(leveler) {
    this.leveler = leveler
    this.sp = 0n
    this.mob = 0n
    this.pvp = 0n
    this.pk = 0n
    this.karma = 0n
    this.isFighting = false
  }

  get isPlayerKiller() {
    return this.karma > 0n
  }

  postmortem(targetSocial, targetHpTotal) {
    targetHpTotal = BigInt(targetHpTotal)
    this.receiveExp(targetHpTotal)
    this.receiveSp(targetHpTotal / 10n)
    // console.log(`${defender.nick} погибнул!`)
    // console.log(`${attacker.nick} получает ${100n} опыта и ${50n} очков`)
    if (!targetSocial) {
      this.mob += 1
      this.receiveKarma(-10n)
    } else {
      this.isFighting = true
      if (targetSocial.isFighting || targetSocial.isPlayerKiller) {
        this.pvp += 1n
      } else {
        this.pk += 1n
        this.receiveKarma(1000n)
      }
    }
  }

  receiveExp(exp) {
    this.leveler.receiveExp(exp)
  }

  receiveSp(sp) {
    this.sp += sp
  }

  receiveKarma(karma) {
    this.karma += karma
    if (this.karma <= 0n) this.karma = 0n
  }
}
