import takePercent from '../functions/takePercent.js'

export default [
  {
    caption: 'Active Breathe',
    level: 1n,
    type: 'spell',
    type: 'phys',
    enforce: {
      toCombat(combat) {
        combat.AtkSpd += takePercent(10n)(combat.PDef)
      },
      toHealth(health) {
        health.protoTotal += takePercent(10n)(health.protoTotal)
      },
    },
    cost: 123n,
  },
  {
    caption: 'Concentration',
    level: 1n,
    type: 'self',
    enabled: true,
    enforce: {
      toCombat(combat) {
        combat.Accuracy += takePercent(10n)(combat.PDef)
      },
      toHealth(health) {
        health.protoTotal += takePercent(10n)(health.protoTotal)
      },
    },
    cost: {
      lvl: 40n,
      sp: 333n,
      mp: 123n,
      hp: 321n,
    },
  },
]
