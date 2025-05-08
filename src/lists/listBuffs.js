import takePercent from '../functions/takePercent.js'

export default [
  {
    caption: 'Heart Of Lion',
    level: 1n,
    nForce2Combat(combat) {},
    nForce2Health(health) {
      health.protoTotal += takePercent(10n)(health.protoTotal)
    },
    nForce2Mana(mana) {},
  },

  {
    caption: 'Haste',
    level: 1n,
    nForce2Combat(combat) {
      combat.Speed += takePercent(10n)(combat.Speed)
    },
    nForce2Health(health) {},
    nForce2Mana(mana) {},
  },
]
