export default [
  {
    caption: 'Concentration Aura',
    level: 1,
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
    level: 1,
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

  //

  {
    caption: 'Vicious Stance',
    level: 1,
    desc: 'когда включен, увеличивает шанс крита. потребляет мп',
    enforce: {
      toStatsCombat: {
        CritRate: 15,
      },
    },
    pulse: {
      toMana: {
        $lose: 3,
      },
    },
  },

  {
    caption: 'Accuracy',
    level: 1,
    desc: 'когда включен, увеличивает точность. потребляет мп',
    enforce: {
      toStatsCombat: {
        Accuracy: 5,
      },
    },
    pulse: {
      toMana: {
        $lose: 3,
      },
    },
  },

  {
    caption: 'Fist Fury',
    level: 1,
    desc: 'когда включен, увеличивает скорость атаки. потребляет хп',
    enforce: {
      toStatsCombat: {
        AtkSpd: 20,
      },
    },
    pulse: {
      toHealth: {
        _$lose: 5,
      },
    },
  },

  {
    caption: 'Recovering Mana Using Health',
    level: 1,
    desc: 'когда включен, восстанавливает ману. потребляет хп',
    pulse: {
      toHealth: {
        _$lose: 7,
      },
      toMana: {
        $gain: 11,
      },
    },
  },

  {
    caption: 'Recovering Health Using Mana',
    level: 1,
    desc: 'когда включен, восстанавливает здоровье. потребляет мп',
    pulse: {
      toMana: {
        $lose: 7,
      },
      toHealth: {
        $gain: 11,
      },
    },
  },
]
