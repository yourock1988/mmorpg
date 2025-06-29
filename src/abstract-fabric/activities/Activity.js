import { getPercent } from '../../functions/utils.js'
import randomId from '../../functions/randomId.js'
import compileActs from '../../functions/compileActs.js'
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
    this.attacker = {}
    this.self = {}
    this.enforce = enforce
    this.pulse = pulse
    this.once = { ...once, executor: this.executor.bind(this) }
    this.acts = compileActs({ enforce, pulse, once })
    // this.once = { ...acts.once, executor: this.executor.bind(this) }
    // this.pulse = { ...acts.pulse, executor: this.executor.bind(this) }
    // this.enforce = { ...acts.enforce, getPercent }
  }

  executor(statusHealth) {
    if (statusHealth !== 'already_dead') {
      if (this.self.social) this.attacker.social.activateModePvP()
      if (!this.self.social) this.attacker.social.activateModePvE()
    }
    if (statusHealth === 'killed_now') {
      this.attacker.social.postmortem(this.self.social, this.self.health.total)
    }
  }

  justOnce(statsCombat, health, mana, fight) {
    if (!this.once) return
    if (statsCombat) this.once.toStatsCombat?.(statsCombat)
    if (health) this.once.toHealth?.(health)
    if (mana) this.once.toMana?.(mana)
    if (fight) this.once.toFight?.(fight)
  }

  pulseStart(statsCombat, health, mana) {
    // console.log(statsCombat) //! пульс на statsCombat stats не понятно зачем
    if (!this.pulse) return
    this.status.pulseIntervalId = setInterval(() => {
      if (statsCombat) this.pulse.toStatsCombat?.(statsCombat)
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
