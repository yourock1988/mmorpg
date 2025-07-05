export default [
  {
    caption: 'Defensive Persist',
    level: 1,
    desc: 'увеличивает защиту, макс хп и реген хп',
    enforce: {
      toStatsCombat: {
        PDef: 10,
        hpTotal: 10,
      },
    },
    pulse: {
      toHealth: {
        $gain: 7,
      },
    },
  },

  //
  //! возможно имеет смысл естественные активити убрать куда-то из персистов ибо нет таких абилок

  {
    caption: 'Natural HP Regeneration',
    level: 1,
    desc: 'естественная регенерация здоровья',
    pulse: {
      toHealth: {
        $gain: 'o.statsCombat.current.hpRegen',
      },
    },
  },
  {
    caption: 'Natural MP Regeneration',
    level: 1,
    desc: 'естественная регенерация маны',
    pulse: {
      toMana: {
        $gain: 'o.statsCombat.current.mpRegen',
      },
    },
  },

  {
    caption: 'Weapon Mastery',
    level: 1,
    desc: 'навсегда увеличивает силу атаки',
    enforce: {
      toStatsCombat: {
        PAtk: 10,
      },
    },
  },

  {
    caption: 'Armor Mastery',
    level: 1,
    desc: 'навсегда увеличивает защиту',
    enforce: {
      toStatsCombat: {
        PDef: 10,
      },
    },
  },

  {
    caption: 'Boost Health',
    level: 1,
    desc: 'навсегда увеличивает запас здоровья',
    enforce: {
      toStatsCombat: {
        hpTotal: 10,
      },
    },
  },

  {
    caption: 'Fast Heath Recovery',
    level: 1,
    desc: 'навсегда увеличивает естественную регенерацию здоровья',
    enforce: {
      toStatsCombat: {
        hpRegen: 10,
      },
    },
  },

  {
    caption: 'Boost Attack Speed',
    level: 1,
    desc: 'навсегда увеличивает скорость атаки',
    enforce: {
      toStatsCombat: {
        AtkSpd: 10,
      },
    },
  },

  {
    caption: 'Magical Power',
    level: 1,
    desc: 'навсегда увеличивает силу магической атаки',
    enforce: {
      toStatsCombat: {
        MAtk: 10,
      },
    },
  },

  {
    caption: 'Anti Magic',
    level: 1,
    desc: 'навсегда увеличивает защиту от магии',
    enforce: {
      toStatsCombat: {
        MDef: 10,
      },
    },
  },

  {
    caption: 'Boost Mana',
    level: 1,
    desc: 'навсегда увеличивает запас маны',
    enforce: {
      toStatsCombat: {
        mpTotal: 10,
      },
    },
  },

  {
    caption: 'Fast Mana Recovery',
    level: 1,
    desc: 'навсегда увеличивает естественную регенерацию маны',
    enforce: {
      toStatsCombat: {
        mpRegen: 10,
      },
    },
  },

  {
    caption: 'Fast Spell Casting',
    level: 1,
    desc: 'навсегда увеличивает скорость произношения заклинания',
    enforce: {
      toStatsCombat: {
        CastSpd: 10,
      },
    },
  },

  {
    caption: 'Quick Step',
    level: 1,
    desc: 'навсегда увеличивает скорость хотьбы',
    enforce: {
      toStatsCombat: {
        Speed: 10,
      },
    },
  },

  {
    caption: 'Critical Chance',
    level: 1,
    desc: 'навсегда увеличивает шанс крита',
    enforce: {
      toStatsCombat: {
        CritRate: 10,
      },
    },
  },
]
