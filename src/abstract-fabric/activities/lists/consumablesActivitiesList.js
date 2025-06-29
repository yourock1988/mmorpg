import { addPercent } from '../../../functions/utils.js'

export default [
  {
    caption: 'Healing Potion',
    level: 1n,
    desc: 'временно увеличивает регенерацию здоровья',
    pulse: {
      toHealth(health) {
        // полная хуета. нужно:
        // либо увеличивать регенерацию через enforce.toStatsCombat.hpRegen
        // либо восстанавливать хп через pulse.toHealth.gain
        const hp = addPercent(health.statsCombat.current.hpRegen, 50)
        health.gain(hp)
      },
    },
  },
]
