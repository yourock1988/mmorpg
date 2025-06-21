import { subPercent } from '../../../functions/utils.js'

export default [
  {
    caption: 'Iron Punch',
    level: 1n,
    desc: 'наносит мощный физический удар',
    config: {
      isSeen: false,
      isPulsing: false,
      isOnce: true,
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
