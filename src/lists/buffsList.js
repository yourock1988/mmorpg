import takePercent from '../functions/takePercent.js'

export default [
  {
    caption: 'Heart Of Lion',
    level: 1n,
    enforce: {
      toHealth(health) {
        health.protoTotal += takePercent(10n)(health.protoTotal)
      },
    },
  },
  {
    caption: 'Haste',
    level: 1n,
    enforce: {
      toCombat(combat) {
        combat.Speed += takePercent(10n)(combat.Speed)
      },
    },
  },
]
