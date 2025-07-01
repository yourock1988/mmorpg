export default [
  {
    caption: 'Heart Of Lion',
    level: 1,
    desc: 'увеличивает точность, макс хп и реген. потребляет мп',
    enforce: {
      toStatsCombat: {
        Accuracy: 10,
        hpTotal: 10,
      },
    },
    pulse: {
      toHealth: {
        $gain: 3,
      },
      toMana: {
        $lose: 7,
      },
    },
  },
  {
    caption: 'Haste',
    level: 1,
    desc: 'увеличивает скорость передвижения',
    enforce: {
      toStatsCombat: {
        Speed: 10,
      },
    },
  },
]
