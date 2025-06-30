import { addPercent } from '../../../functions/utils.js'

export default [
  {
    caption: 'Heart Of Lion',
    level: 1n,
    desc: 'увеличивает точность, макс хп и реген. потребляет мп',
    enforce: {
      toStatsCombat: {
        Accuracy: 10,
        hpTotal: 10,
      },
    },
    pulse: {
      toHealth: {
        $gain: 3,
      },
      toMana: {
        $lose: 7,
      },
    },
  },
  {
    caption: 'Haste',
    level: 1n,
    desc: 'увеличивает скорость передвижения',
    enforce: {
      toStatsCombat: {
        Speed: 10,
      },
    },
  },
]
