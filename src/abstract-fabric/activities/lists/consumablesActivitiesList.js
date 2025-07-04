export default [
  {
    caption: 'Soulshot: No Grade',
    level: 1,
    desc: 'удвоитель физического удара. расходуется для каждого удара',
    enforce: {
      toStatsCombat: {
        PAtk: 100,
      },
    },
  },

  {
    caption: 'Spiritshot: No Grade',
    level: 1,
    desc: 'удвоитель мегического удара. расходуется для каждого удара',
    enforce: {
      toStatsCombat: {
        MAtk: 100,
      },
    },
  },

  {
    caption: 'Lesser Healing Potion',
    level: 1,
    desc: 'временно незначительно восстанавливает хп',
    once: {
      toHealth: {
        $gain: 30,
      },
    },
    pulse: {
      toHealth: {
        $gain: 3,
      },
    },
  },

  {
    caption: 'Healing Potion',
    level: 1,
    desc: 'временно восстанавливает хп',
    once: {
      toHealth: {
        $gain: 70,
      },
    },
    pulse: {
      toHealth: {
        $gain: 7,
      },
    },
  },

  {
    caption: 'Greater Healing Potion',
    level: 1,
    desc: 'временно колосально восстанавливает хп',
    once: {
      toHealth: {
        $gain: 150,
      },
    },
    pulse: {
      toHealth: {
        $gain: 15,
      },
    },
  },

  {
    caption: 'Quick Healing Potion',
    level: 1,
    desc: 'мгновенно восстанавливает хп',
    once: {
      toHealth: {
        $gain: 700,
      },
    },
  },

  {
    caption: 'Greater Quick Healing Potion',
    level: 1,
    desc: 'мгновенно колосально восстанавливает хп',
    once: {
      toHealth: {
        $gain: 1500,
      },
    },
  },

  {
    caption: 'Mana Potion',
    level: 1,
    desc: 'временно восстанавливает мп',
    once: {
      toMana: {
        $gain: 30,
      },
    },
    pulse: {
      toMana: {
        $gain: 3,
      },
    },
  },

  {
    caption: 'Greater Mana Potion',
    level: 1,
    desc: 'временно колосально восстанавливает мп',
    once: {
      toMana: {
        $gain: 70,
      },
    },
    pulse: {
      toMana: {
        $gain: 7,
      },
    },
  },

  {
    caption: 'Haste Potion',
    level: 1,
    desc: 'временно повышает скорость передвижения',
    enforce: {
      toStatsCombat: {
        Speed: 15,
      },
    },
  },

  {
    caption: 'Greater Haste Potion',
    level: 1,
    desc: 'временно колосально повышает скорость передвижения',
    enforce: {
      toStatsCombat: {
        Speed: 30,
      },
    },
  },

  {
    caption: 'Potion Of Alacrity',
    level: 1,
    desc: 'временно повышает скорость атаки',
    enforce: {
      toStatsCombat: {
        AtkSpd: 15,
      },
    },
  },

  {
    caption: 'Greater Swift Attack Potion',
    level: 1,
    desc: 'временно колосально повышает скорость атаки',
    enforce: {
      toStatsCombat: {
        AtkSpd: 30,
      },
    },
  },

  {
    caption: 'Magic Casting Potion',
    level: 1,
    desc: 'временно повышает скорость произношения заклинания',
    enforce: {
      toStatsCombat: {
        CastSpd: 15,
      },
    },
  },

  {
    caption: 'Greater Magic Casting Potion',
    level: 1,
    desc: 'временно колосально повышает скорость произношения заклинания',
    enforce: {
      toStatsCombat: {
        CastSpd: 30,
      },
    },
  },
]
