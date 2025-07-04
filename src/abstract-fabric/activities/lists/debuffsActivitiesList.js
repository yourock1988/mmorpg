export default [
  {
    caption: 'Curse Poison',
    level: 1,
    desc: 'временно отравляет противника ядом',
    pulse: {
      toHealth: {
        _$lose: 7,
      },
    },
  },

  {
    caption: 'Dryad Root',
    level: 1,
    desc: 'временно приковывает противника к земле',
    enforce: {
      toStatsCombat: {
        Speed: -100,
      },
    },
  },

  {
    caption: 'Sleep',
    level: 1,
    desc: 'временно усыпляет противника',
    enforce: {
      toStatsCombat: {
        Speed: -100,
        PAtk: -100,
        MAtk: -100,
      },
    },
  },

  {
    caption: 'Mana Burn',
    level: 1,
    desc: 'постепенно сжигает ману противника',
    pulse: {
      toMana: {
        $lose: 5,
      },
    },
  },

  {
    caption: 'Wind Shackle',
    level: 1,
    desc: 'временно уменьшает скорость атаки противника',
    enforce: {
      toStatsCombat: {
        AtkSpd: -20,
      },
    },
  },

  {
    caption: 'Trembling Hands',
    level: 1,
    desc: 'временно уменьшает точность противника',
    enforce: {
      toStatsCombat: {
        Accuracy: -15,
      },
    },
  },

  {
    caption: 'Block Shield',
    level: 1,
    desc: 'временно уменьшает защиту противника',
    enforce: {
      toStatsCombat: {
        PDef: -15,
      },
    },
  },

  {
    caption: 'Blizzard',
    level: 1,
    desc: 'временно уменьшает скорость передвижения противника',
    enforce: {
      toStatsCombat: {
        Speed: -30,
      },
    },
  },

  {
    caption: 'Wind Vortex',
    level: 1,
    desc: 'временно уменьшает реген мп, скорость хотьбы, атаки и каста',
    enforce: {
      toStatsCombat: {
        Speed: -10,
        AtkSpd: -10,
        CastSpd: -30,
        mpRegen: -12,
        // RisistWind: -20,
      },
    },
  },

  {
    caption: 'Seal of Scourge',
    level: 1,
    desc: 'временно отключает естественную регенерацию здоровья у противника',
    enforce: {
      toStatsCombat: {
        hpRegen: -100,
      },
    },
  },

  {
    caption: 'Seal of Despair',
    level: 1,
    desc: 'временно уменьшает PAtk,MDef,Accuracy,CritRate,Speed,AtkSpd',
    enforce: {
      toStatsCombat: {
        PAtk: -10,
        MDef: -30,
        Accuracy: -6,
        CritRate: -30,
        Speed: -20,
        AtkSpd: -30,
        // CritDmg: -30,
      },
    },
  },

  {
    caption: 'Psycho Symphony',
    level: 1,
    desc: 'временно уменьшает скорость хотьбы, атаки и каста',
    enforce: {
      toStatsCombat: {
        Speed: -15,
        AtkSpd: -15,
        CastSpd: -15,
      },
    },
  },
]
