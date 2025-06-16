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
    this.enforce = enforce
    this.pulse = pulse
  }

  pulseStart(combat, health, mana) {
    // console.log(combat) //! пульс на combat stats не понятно зачем
    this.status.pulseIntervalId = setInterval(() => {
      if (combat) this.pulse.toCombat?.(combat)
      if (health) this.pulse.toHealth?.(health)
      if (mana) this.pulse.toMana?.(mana)
    }, this.config.pulseIntervalDelay)
  }

  pulseStop() {
    clearInterval(this.status.pulseIntervalId)
    this.status.pulseIntervalId = 0
    // console.log('pulseStop', this.id)
  }
}
