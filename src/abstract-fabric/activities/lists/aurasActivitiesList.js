import { addPercent } from '../../../functions/utils.js'

export default [
  {
    caption: 'Concentration Aura',
    level: 1n,
    desc: 'увеличивает точность и макс хп. потребляет хп',
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
        health.lose(7)
      },
    },
  },
  {
    caption: 'Breathe Aura',
    level: 1n,
    desc: 'увеличивает скорость атаки и макс хп. потребляет мп',
    config: {
      isSeen: true,
      isPulsing: true,
      duration: Infinity,
      pulseIntervalDelay: 300,
    },
    enforce: {
      toCombat(combat) {
        combat.AtkSpd = addPercent(combat.AtkSpd, 10)
      },
      toHealth(health) {
        health.protoTotal = addPercent(health.protoTotal, 10)
      },
    },
    pulse: {
      toMana(mana) {
        mana.lose(7)
      },
    },
  },
]
