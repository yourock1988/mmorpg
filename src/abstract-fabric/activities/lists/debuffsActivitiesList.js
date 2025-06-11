import takePercent from '../../../functions/takePercent.js'

export default [
  {
    caption: 'Curse Poison',
    level: 1n,
    desc: 'уменьшает макс хп',
    config: {
      isSeen: true,
      isPulsing: true,
      duration: Infinity,
      pulseIntervalDelay: 300,
    },
    status: {
      pulseIntervalId: 0,
    },
    enforce: {
      toHealth(health) {
        health.protoTotal -= takePercent(10n)(health.protoTotal)
      },
    },
    pulse: {
      toHealth(health) {
        health.lose(6n)
      },
    },
  },
]
