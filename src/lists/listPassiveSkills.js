import takePercent from '../functions/takePercent.js'

export default [
  {
    caption: 'Defensive Aura',
    level: 1n,
    nForce2Combat(combat) {
      combat.PDef += takePercent(10n)(combat.PDef)
    },
    nForce2Health(health) {
      health.protoTotal += takePercent(10n)(health.protoTotal)
    },
    nForce2Mana(mana) {},
  },
]
