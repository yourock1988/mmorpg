import randomId from '../../functions/randomId.js'
import activityDefaultConfigs from './activityDefaultConfigs.js'

export default class Activity {
  constructor({ type, caption, level, desc, config, enforce, pulse, once }) {
    this.id = randomId()
    this.type = type
    this.caption = caption
    this.level = level
    this.desc = desc
    this.config = { ...activityDefaultConfigs[type + 's'], ...config }
    this.status = {
      pulseIntervalId: 0,
      durationTimeoutId: 0,
    }
    this.enforce = enforce
    this.pulse = pulse
    this.once = once
  }

  justOnce(combat, health, mana, fight) {
    if (!this.once) return
    if (combat) this.once.toCombat?.(combat)
    if (health) this.once.toHealth?.(health)
    if (mana) this.once.toMana?.(mana)
    if (fight) this.once.toFight?.(fight)
  }

  pulseStart(combat, health, mana) {
    // console.log(combat) //! пульс на combat stats не понятно зачем
    if (!this.pulse) return
    this.status.pulseIntervalId = setInterval(() => {
      if (combat) this.pulse.toCombat?.(combat)
      if (health) this.pulse.toHealth?.(health)
      if (mana) this.pulse.toMana?.(mana)
    }, this.config.pulseIntervalDelay)
  }

  pulseStop() {
    clearInterval(this.status.pulseIntervalId)
    clearTimeout(this.status.durationTimeoutId)
    this.status.pulseIntervalId = 0
    // console.log('pulseStop', this.id)
  }
}
