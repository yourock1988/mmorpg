export default class Social {
  constructor(leveler) {
    this.leveler = leveler
    this.sp = 0n
    this.mob = 0n
    this.pvp = 0n
    this.pk = 0n
    this.karma = 0n
    this.isModeFight = false
    this.isModePvE = false
    this.isModePvP = false
    this.timeoutModeFight = null
    this.timeoutModePvE = null
    this.timeoutModePvP = null
  }

  get isModePK() {
    return this.karma > 0n
  }

  postmortem(targetSocial, targetHpTotal) {
    if (this.isModePK) {
      if (!targetSocial) {
        this.receiveKarma(-10n)
      } else {
        this.pk += 1n
        this.receiveKarma(1000n)
      }
    } else {
      targetHpTotal = BigInt(targetHpTotal)
      this.receiveExp(targetHpTotal)
      this.receiveSp(targetHpTotal / 10n)
      if (!targetSocial) {
        this.mob += 1
      } else {
        if (targetSocial.isModePvP || targetSocial.isModePK) {
          this.pvp += 1n
        } else {
          this.pk += 1n
          this.receiveKarma(1000n)
        }
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

  activateModeFight() {
    this.activateMode('isModeFight', 'timeoutModeFight', 5000)
  }

  activateModePvE() {
    this.activateModeFight()
    this.activateMode('isModePvE', 'timeoutModePvE', 15000)
  }

  activateModePvP() {
    this.activateModeFight()
    this.activateMode('isModePvP', 'timeoutModePvP', 25000)
  }

  activateMode(modeProp, timeoutProp, ms) {
    this[modeProp] = true
    clearTimeout(this[timeoutProp])
    this[timeoutProp] = setTimeout(() => {
      this[modeProp] = false
    }, ms)
  }

  destroy() {
    clearTimeout(this.timeoutModeFight)
    clearTimeout(this.timeoutModePvE)
    clearTimeout(this.timeoutModePvP)
  }
}
