import { addPercent } from '../../../functions/utils.js'

export default [
  {
    caption: 'Heart Of Lion',
    level: 1n,
    desc: 'увеличивает точность, макс хп и реген. потребляет мп',
    enforce: {
      toStatsCombat(statsCombat) {
        statsCombat.Accuracy = addPercent(statsCombat.Accuracy, 10)
      },
      toHealth(health) {
        health.protoTotal = addPercent(health.protoTotal, 10)
      },
    },
    pulse: {
      toHealth(health) {
        health.gain(3)
      },
      toMana(mana) {
        mana.lose(7)
      },
    },
  },
  {
    caption: 'Haste',
    level: 1n,
    desc: 'увеличивает скорость передвижения',
    enforce: {
      toStatsCombat(statsCombat) {
        statsCombat.Speed = addPercent(statsCombat.Speed, 10)
      },
    },
  },
]
