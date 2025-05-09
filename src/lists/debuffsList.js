import takePercent from '../functions/takePercent.js'

export default [
  {
    caption: 'Curse Poison',
    level: 1n,
    enforce: {
      toHealth(health) {
        health.protoTotal -= takePercent(10n)(health.protoTotal)
      },
    },
  },
]
