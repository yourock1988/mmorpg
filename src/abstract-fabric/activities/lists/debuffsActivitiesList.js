import { subPercent } from '../../../functions/utils.js'

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
        health.protoTotal = subPercent(health.protoTotal, 10)
      },
    },
    pulse: {
      toHealth(health) {
        health.lose(6)
      },
    },
  },
]
