import { subPercent } from '../../../functions/utils.js'

export default [
  {
    caption: 'Curse Poison',
    level: 1n,
    desc: 'уменьшает макс хп и реген хп',
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
