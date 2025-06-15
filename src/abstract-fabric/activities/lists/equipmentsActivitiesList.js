import takePercent from '../../../functions/takePercent.js'
import { addPerc } from '../../../functions/utils.js'

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
    status: {
      pulseIntervalId: 0,
    },
    enforce: {
      toCombat(combat) {
        combat.PDef += takePercent(10n)(combat.PDef)
      },
      toHealth(health) {
        health.protoTotal += takePercent(10n)(health.protoTotal)
      },
    },
    pulse: {
      toHealth(health) {
        health.gain(7n)
      },
    },
  },
  {
    caption: 'Gloves Of Monk',
    level: 1n,
    desc: 'увеличивает макс мп',
    config: {
      pulseIntervalDelay: 300,
      isPulsing: true,
      isSeen: false,
      duration: Infinity,
    },
    status: {
      pulseIntervalId: 0,
    },
    enforce: {
      toMana(mana) {
        mana.protoTotal = addPerc(mana.protoTotal, 10)
      },
      toHealth(health) {
        health.protoTotal = addPerc(health.protoTotal, 10)
      },
    },
  },
]
