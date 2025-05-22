import takePercent from '../../../functions/takePercent.js'

export default [
  {
    caption: 'Defensive Persist',
    level: 1n,
    desc: 'увеличивает защиту, макс хп и реген хп',
    config: {
      isCancelable: false,
      isSeen: false,
      canPulsing: true,
      duration: Infinity,
      pulseIntervalDelay: 300,
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
]
