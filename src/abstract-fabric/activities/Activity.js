import randomId from '../../functions/randomId.js'

export default class Activity {
  constructor({ type, caption, level, desc, config, status, enforce, pulse }) {
    this.id = randomId()
    this.type = type
    this.caption = caption
    this.level = level
    this.desc = desc
    this.config = config
    this.status = status
    this.enforce = enforce ?? {
      toCombat(combat) {},
      toHealth(health) {},
      toMana(mana) {},
    }
    this.pulse = pulse ?? {
      toCombat(combat) {},
      toHealth(health) {},
      toMana(mana) {},
    }
  }

  pulseStart(combat, health, mana) {
    this.status.pulseIntervalId = setInterval(() => {
      this.pulse.toCombat?.(combat)
      this.pulse.toHealth?.(health)
      this.pulse.toMana?.(mana)
    }, this.config.pulseIntervalDelay)
  }

  pulseStop() {
    clearInterval(this.status.pulseIntervalId)
    this.status.pulseIntervalId = 0
    // console.log('pulseStop', this.id)
  }
}
