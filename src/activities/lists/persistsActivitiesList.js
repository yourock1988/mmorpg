import takePercent from '../../functions/takePercent.js'

export default [
  {
    caption: 'Defensive Persist',
    level: 1n,
    enforce: {
      toCombat(combat) {
        combat.PDef += takePercent(10n)(combat.PDef)
      },
      toHealth(health) {
        health.protoTotal += takePercent(10n)(health.protoTotal)
      },
    },
  },
]
