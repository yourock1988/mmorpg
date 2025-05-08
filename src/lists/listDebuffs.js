import takePercent from '../functions/takePercent.js'

export default [
  {
    caption: 'Curse Poison',
    level: 1n,
    nForce2Combat(combat) {},
    nForce2Health(health) {
      health.protoTotal -= takePercent(10n)(health.protoTotal)
    },
    nForce2Mana(mana) {},
  },
]
