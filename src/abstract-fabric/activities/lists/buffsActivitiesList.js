import { addPercent } from '../../../functions/utils.js'

export default [
  {
    caption: 'Heart Of Lion',
    level: 1n,
    desc: 'увеличивает точность, макс хп и реген. потребляет мп',
    config: {
      isSeen: true,
      isPulsing: true,
      duration: Infinity,
      pulseIntervalDelay: 300,
    },
    enforce: {
      toCombat(combat) {
        combat.Accuracy = addPercent(combat.Accuracy, 10)
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
        mana.lose(3)
      },
    },
  },
  {
    caption: 'Haste',
    level: 1n,
    desc: 'увеличивает скорость передвижения',
    config: {
      isSeen: true,
      isPulsing: false,
      duration: Infinity,
      pulseIntervalDelay: 0,
    },
    enforce: {
      toCombat(combat) {
        combat.Speed = addPercent(combat.Speed, 10)
      },
    },
  },
]
