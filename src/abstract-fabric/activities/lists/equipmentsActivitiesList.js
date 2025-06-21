import { addPercent } from '../../../functions/utils.js'

export default [
  {
    caption: 'Helmet Of Truth',
    level: 1n,
    desc: 'увеличивает защиту, макс хп и реген хп',
    enforce: {
      toStatsCombat(statsCombat) {
        statsCombat.PDef = addPercent(statsCombat.PDef, 10)
      },
      toHealth(health) {
        health.protoTotal = addPercent(health.protoTotal, 10)
      },
    },
    pulse: {
      toHealth(health) {
        health.gain(7)
      },
    },
  },
  {
    caption: 'Gloves Of Monk',
    level: 1n,
    desc: 'увеличивает макс мп',
    enforce: {
      toMana(mana) {
        mana.protoTotal = addPercent(mana.protoTotal, 10)
      },
      toHealth(health) {
        health.protoTotal = addPercent(health.protoTotal, 10)
      },
    },
  },
]
