import { addPercent } from '../../../functions/utils.js'

export default [
  {
    caption: 'Defensive Persist',
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
    caption: 'Natural HP Regeneration',
    level: 1n,
    desc: 'естественная регенерация здоровья',
    pulse: {
      toHealth(health) {
        health.gain(health.statsCombat.current.hpRegen)
      },
    },
  },
  {
    caption: 'Natural MP Regeneration',
    level: 1n,
    desc: 'естественная регенерация маны',
    pulse: {
      toMana(mana) {
        mana.gain(mana.statsCombat.current.mpRegen)
      },
    },
  },
]
