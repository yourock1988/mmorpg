import takePercent from '../functions/takePercent.js'

export default [
  {
    caption: 'Active Breathe',
    level: 1n,
    nForce2Combat(combat) {
      combat.PAtk += takePercent(10n)(combat.PDef)
    },
    nForce2Health(health) {
      health.protoTotal += takePercent(10n)(health.protoTotal)
    },
    nForce2Mana(mana) {},
  },
]
