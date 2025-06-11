import takePercent from '../../../functions/takePercent.js'

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
    status: {
      pulseIntervalId: 0,
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
        health.gain(3n)
      },
      toMana(mana) {
        mana.lose(3n)
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
    status: {
      pulseIntervalId: 0,
    },
    enforce: {
      toCombat(combat) {
        combat.Speed += takePercent(10n)(combat.Speed)
      },
    },
  },
]
