import { addPercent } from '../../../functions/utils.js'

export default [
  {
    caption: 'Healing Potion',
    level: 1n,
    desc: 'восстанавливает хп',
    pulse: {
      toHealth: {
        $gain: 7,
      },
    },
  },
]
