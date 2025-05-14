import randomId from '../functions/randomId.js'

export default class Activity {
  constructor({ type, caption, level, desc, config, enforce, pulse }) {
    this.id = randomId()
    this.type = type
    this.caption = caption
    this.level = level
    this.desc = desc
    this.config = config
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
    this.config.pulseIntervalId = setInterval(() => {
      this.pulse.toCombat?.(combat)
      this.pulse.toHealth?.(health)
      this.pulse.toMana?.(mana)
      // console.log(health.current)
    }, this.config.pulseIntervalDelay)
  }

  pulseStop() {
    clearInterval(this.config.pulseIntervalId)
    // console.log('pulseStop')
  }
}
