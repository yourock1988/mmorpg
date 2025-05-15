import takePercent from '../../../functions/takePercent.js'

export default [
  {
    caption: 'Concentration Aura',
    level: 1n,
    desc: 'увеличивает точность и макс хп. потребляет хп',
    config: {
      isSeen: true,
      canPulsing: true,
      duration: Infinity,
      pulseIntervalId: 0,
      pulseIntervalDelay: 300,
    },
    enforce: {
      toCombat(combat) {
        combat.Accuracy += takePercent(10n)(combat.PDef)
      },
      toHealth(health) {
        health.protoTotal += takePercent(10n)(health.protoTotal)
      },
    },
    pulse: {
      toHealth(health) {
        health.lose(3n)
      },
    },
  },
  {
    caption: 'Breathe Aura',
    level: 1n,
    desc: 'увеличивает скорость атаки и макс хп. потребляет мп',
    enforce: {
      toCombat(combat) {
        combat.AtkSpd += takePercent(10n)(combat.PDef)
      },
      toHealth(health) {
        health.protoTotal += takePercent(10n)(health.protoTotal)
      },
      toMana(mana) {
        mana.lose(7n)
      },
    },
  },
]
