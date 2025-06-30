export default [
  {
    caption: 'Concentration Aura',
    level: 1n,
    desc: 'увеличивает точность и макс хп. потребляет хп',
    enforce: {
      toStatsCombat: {
        Accuracy: 10,
        hpTotal: 10,
      },
    },
    pulse: {
      toHealth: {
        $lose: 7,
      },
    },
  },
  {
    caption: 'Breathe Aura',
    level: 1n,
    desc: 'увеличивает скорость атаки и макс хп. потребляет мп',
    enforce: {
      toStatsCombat: {
        AtkSpd: 10,
        hpTotal: 10,
      },
    },
    pulse: {
      toMana: {
        $lose: 7,
      },
    },
  },
]
