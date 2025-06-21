import { addPercent } from '../../../functions/utils.js'

export default [
  {
    caption: 'Helmet Of Truth',
    level: 1n,
    desc: 'увеличивает защиту, макс хп и реген хп',
    config: {
      pulseIntervalDelay: 300,
      isPulsing: true,
      isSeen: false,
      duration: Infinity,
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
    caption: 'Gloves Of Monk',
    level: 1n,
    desc: 'увеличивает макс мп',
    config: {
      pulseIntervalDelay: 300,
      isPulsing: false,
      isSeen: false,
      duration: Infinity,
    },
    enforce: {
      toMana(mana) {
        mana.protoTotal = addPercent(mana.protoTotal, 10)
      },
      toHealth(health) {
        health.protoTotal = addPercent(health.protoTotal, 10)
      },
    },
  },
]
