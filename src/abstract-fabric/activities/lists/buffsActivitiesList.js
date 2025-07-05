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

  //

  {
    caption: 'Self Heal',
    level: 1,
    desc: 'мгновенно восстанавливает собственное здоровье',
    once: {
      toHealth: {
        $gain: 15,
      },
    },
  },

  {
    caption: 'Heal',
    level: 1,
    desc: 'мгновенно восстанавливает здоровье',
    once: {
      toHealth: {
        $gain: 15,
      },
    },
  },

  {
    caption: 'Battle Heal',
    level: 1,
    desc: 'мгновенно и значительно восстанавливает здоровье. короткий каст',
    once: {
      toHealth: {
        $gain: 20,
      },
    },
  },

  {
    caption: 'Might',
    level: 1,
    desc: 'временно увеличивает физическую атаку',
    enforce: {
      toStatsCombat: {
        PAtk: 15,
      },
    },
  },

  {
    caption: 'Shield',
    level: 1,
    desc: 'временно увеличивает физическую защиту',
    enforce: {
      toStatsCombat: {
        PDef: 15,
      },
    },
  },

  {
    caption: 'Wind Walk',
    level: 1,
    desc: 'временно увеличивает скорость передвижения',
    enforce: {
      toStatsCombat: {
        Speed: 15,
      },
    },
  },

  {
    caption: 'Acumen',
    level: 1,
    desc: 'временно увеличивает скорость произношения заклинания',
    enforce: {
      toStatsCombat: {
        CastSpd: 15,
      },
    },
  },

  {
    caption: 'Focus',
    level: 1,
    desc: 'временно увеличивает шанс нанести критический урон',
    enforce: {
      toStatsCombat: {
        CritRate: 15,
      },
    },
  },

  {
    caption: 'Berserker Spirit',
    level: 1,
    desc: 'временно увеличивает Atk,AtkSpd,CastSpd,Speed. режет Def,Evasion',
    enforce: {
      toStatsCombat: {
        PDef: -15,
        MDef: -15,
        Evasion: -15,
        PAtk: 15,
        MAtk: 15,
        AtkSpd: 15,
        CastSpd: 15,
        Speed: 15,
      },
    },
  },

  {
    caption: 'Regeneration',
    level: 1,
    desc: 'временно увеличивает естественную регенерацию здоровья',
    enforce: {
      toStatsCombat: {
        hpRegen: 15,
      },
    },
  },

  {
    caption: 'Guidance',
    level: 1,
    desc: 'временно увеличивает точность',
    enforce: {
      toStatsCombat: {
        Accuracy: 15,
      },
    },
  },

  {
    caption: 'Blessed Body',
    level: 1,
    desc: 'временно увеличивает максимум здоровья',
    enforce: {
      toStatsCombat: {
        hpTotal: 20,
      },
    },
  },

  {
    caption: 'Blessed Soul',
    level: 1,
    desc: 'временно увеличивает максимум маны',
    enforce: {
      toStatsCombat: {
        mpTotal: 20,
      },
    },
  },

  {
    caption: 'Haste',
    level: 1,
    desc: 'временно увеличивает скорость атаки',
    enforce: {
      toStatsCombat: {
        AtkSpd: 15,
      },
    },
  },

  {
    caption: 'Magic Barrier',
    level: 1,
    desc: 'временно увеличивает магическую защиту',
    enforce: {
      toStatsCombat: {
        MDef: 15,
      },
    },
  },

  {
    caption: 'Greater Might',
    level: 1,
    desc: 'временно колосально увеличивает физическую атаку',
    enforce: {
      toStatsCombat: {
        PAtk: 30,
      },
    },
  },

  {
    caption: 'Greater Shield',
    level: 1,
    desc: 'временно колосально увеличивает физическую защиту',
    enforce: {
      toStatsCombat: {
        PDef: 30,
      },
    },
  },

  {
    caption: 'Empower',
    level: 1,
    desc: 'временно увеличивает магическую атаку',
    enforce: {
      toStatsCombat: {
        MAtk: 30,
      },
    },
  },

  {
    caption: 'Recharge',
    level: 1,
    desc: 'мгновенно наливает ману',
    once: {
      toMana: {
        $gain: 10,
      },
    },
  },

  {
    caption: 'Prophecy of Fire',
    level: 1,
    desc: 'временно увеличивает практически все боевые характеристики',
    enforce: {
      toStatsCombat: {
        hpTotal: 10,
        hpRegen: 20,
        PAtk: 5,
        PDef: 10,
        AtkSpd: 10,
        MAtk: 10,
        MDef: 10,
        CastSpd: 20,
        CritRate: 9,
        Speed: 20,
        // CritDmg: 10,
        // ResistDebuffs: 20,
      },
    },
  },

  {
    caption: 'Mind To Body',
    level: 1,
    desc: 'временно конвертирует запас маны в здоровье',
    enforce: {
      toStatsCombat: {
        mpTotal: -10,
        hpTotal: 20,
      },
    },
  },

  {
    caption: 'Body To Mind',
    level: 1,
    desc: 'временно конвертирует запас здоровья в ману',
    enforce: {
      toStatsCombat: {
        hpTotal: -10,
        mpTotal: 20,
      },
    },
  },
]
