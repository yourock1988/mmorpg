import { addPercent } from '../../../functions/utils.js'

export default [
  {
    caption: 'Healing Potion',
    level: 1n,
    desc: 'временно увеличивает регенерацию здоровья',
    config: {
      isSeen: true,
      duration: 15000,
      pulseIntervalDelay: 300,
    },
    pulse: {
      toHealth(health) {
        const hp = addPercent(health.statsCombat.current.hpRegen, 50)
        health.gain(hp)
      },
    },
  },
]
