import { subPercent } from '../../../functions/utils.js'

export default [
  {
    caption: 'Iron Punch',
    level: 1n,
    desc: 'наносит мощный физический удар',
    once: {
      toFight(fight) {
        fight.receiveDamage('phys', 123)
      },
    },
  },
]
