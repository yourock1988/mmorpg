import takePercent from '../functions/takePercent.js'

export default [
  {
    slotName: 'weapon',
    caption: 'Axe Of Glory',
    stats: { PAtk: 42n, AtkSpd: 11n },
  },
  {
    slotName: 'weapon',
    caption: 'Blade Of Blood',
    stats: { PAtk: 33n },
  },
  {
    slotName: 'helmet',
    caption: 'Helmet Of Truth',
    stats: { PDef: 33n },
    enforce: {
      toHealth(health) {
        health.protoTotal += takePercent(10n)(health.protoTotal)
      },
    },
  },
  {
    slotName: 'gloves',
    caption: 'Gloves Of Monk',
    stats: { PDef: 22n },
    enforce: {
      toMana(mana) {
        mana.protoTotal += takePercent(10n)(mana.protoTotal)
      },
    },
  },
]
