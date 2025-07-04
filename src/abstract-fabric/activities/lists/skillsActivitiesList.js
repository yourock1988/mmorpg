export default [
  {
    caption: 'Iron Punch',
    level: 1,
    desc: 'мощный удар в челюсть. требуются кастеты',
    once: {
      toFight: {
        _$receiveDamagePhys: 29,
      },
    },
  },

  {
    caption: 'Blinding Punch',
    level: 1,
    desc: 'удар в нос, от которого враг теряет точность. требуются кастеты',
    once: {
      toFight: {
        _$receiveDamagePhys: 11,
      },
    },
    enforce: {
      toCombatStats: {
        Accuracy: -15,
      },
    },
  },

  {
    caption: 'Mortal Blow',
    level: 1,
    desc: 'мощный режущий удар. требуется кинжал',
    once: {
      toFight: {
        _$receiveDamagePhys: 73,
      },
    },
  },

  {
    caption: 'Bleeding Blow',
    level: 1,
    desc: 'наносит порез, вызывающий кровотечение. требуется кинжал',
    once: {
      toFight: {
        _$receiveDamagePhys: 11,
      },
    },
    pulse: {
      toHealth: {
        _$lose: 23,
      },
    },
  },

  {
    caption: 'Power Strike',
    level: 1,
    desc: 'мощный удар по башке. требуются мечь или топор',
    once: {
      toFight: {
        _$receiveDamagePhys: 25,
      },
    },
  },

  {
    caption: 'Halving Strike',
    level: 1,
    desc: 'уполовинивает скорость атаки врага. требуются мечь или топор',
    once: {
      toFight: {
        _$receiveDamagePhys: 11,
      },
    },
    enforce: {
      toCombatStats: {
        AtkSpd: -50,
      },
    },
  },

  {
    caption: 'Power Shot',
    level: 1,
    desc: 'мощный выстрел заряженной стрелой. требуется лук',
    once: {
      toFight: {
        _$receiveDamagePhys: 65,
      },
    },
  },

  {
    caption: 'Stunning Shot',
    level: 1,
    desc: 'выстрел стрелой, вводящей врага в состояние шока. требуется лук',
    once: {
      toFight: {
        _$receiveDamagePhys: 11,
      },
    },
    enforce: {
      toCombatStats: {
        Speed: -100,
        PAtk: -100,
      },
    },
  },
]
