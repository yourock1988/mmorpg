import { addPercent } from '../../../functions/utils.js'

export default [
  {
    caption: 'Defensive Persist',
    level: 1n,
    desc: 'увеличивает защиту, макс хп и реген хп',
    config: {
      isSeen: false,
      isPulsing: true,
      duration: Infinity,
      pulseIntervalDelay: 300,
    },
    status: {
      pulseIntervalId: 0,
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
]
