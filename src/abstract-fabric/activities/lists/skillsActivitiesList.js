import { subPercent } from '../../../functions/utils.js'

export default [
  {
    caption: 'Iron Punch',
    level: 1n,
    desc: 'наносит мощный физический удар',
    config: {
      isSeen: false,
      duration: 0,
      pulseIntervalDelay: 0,
    },
    once: {
      toFight(fight) {
        fight.receiveDamage('phys', 123)
      },
    },
  },
]
