import { subPercent } from '../../../functions/utils.js'

export default [
  {
    caption: 'Hydro Blast',
    level: 1n,
    desc: 'наносит мощный магический удар',
    once: {
      toFight(fight) {
        const statusHealth = fight.receiveDamageMagic(77)
        this.executor(statusHealth)
      },
    },
  },
]
