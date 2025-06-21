import { addPercent } from '../../../functions/utils.js'

export default [
  {
    caption: 'Defensive Persist',
    level: 1n,
    desc: 'увеличивает защиту, макс хп и реген хп',
    config: {
      isSeen: false,
      duration: Infinity,
      pulseIntervalDelay: 300,
    },
    enforce: {
      toCombat(combat) {
        combat.PDef = addPercent(combat.PDef, 10)
      },
      toHealth(health) {
        health.protoTotal = addPercent(health.protoTotal, 10)
      },
    },
    pulse: {
      toHealth(health) {
        health.gain(7)
      },
    },
  },
  {
    caption: 'Natural HP Regeneration',
    level: 1n,
    desc: 'естественная регенерация здоровья',
    config: {
      isSeen: false,
      duration: Infinity,
      pulseIntervalDelay: 1000,
    },
    pulse: {
      toHealth(health) {
        health.gain(health.statsCombat.current.hpRegen)
      },
    },
  },
  {
    caption: 'Natural MP Regeneration',
    level: 1n,
    desc: 'естественная регенерация маны',
    config: {
      isSeen: false,
      duration: Infinity,
      pulseIntervalDelay: 1000,
    },
    pulse: {
      toMana(mana) {
        mana.gain(mana.statsCombat.current.mpRegen)
      },
    },
  },
]
