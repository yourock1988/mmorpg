import takePercent from '../../../functions/takePercent.js'

export default [
  {
    slotName: 'weapon',
    caption: 'Axe Of Glory',
    grade: 'D',
    stats: { PAtk: 42n, AtkSpd: 11n },
    hasActivity: false,
  },
  {
    slotName: 'weapon',
    caption: 'Blade Of Blood',
    grade: 'D',
    stats: { PAtk: 33n },
    hasActivity: false,
  },
  {
    slotName: 'helmet',
    caption: 'Helmet Of Truth',
    grade: 'D',
    stats: { PDef: 33n },
    hasActivity: true,
  },
  {
    slotName: 'gloves',
    caption: 'Gloves Of Monk',
    grade: 'D',
    stats: { PDef: 22n },
    enforce: {
      toMana(mana) {
        mana.protoTotal += takePercent(10n)(mana.protoTotal)
      },
    },
    hasActivity: false,
  },
]
