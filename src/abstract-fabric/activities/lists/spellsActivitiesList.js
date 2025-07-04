export default [
  {
    caption: 'Solar Flare',
    level: 1,
    desc: 'мощное атакующее магическое заклинание',
    once: {
      toFight: {
        _$receiveDamageMagic: 555,
      },
    },
  },

  {
    caption: 'Hydro Blast',
    level: 1,
    desc: 'мощное атакующее магическое заклинание',
    once: {
      toFight: {
        _$receiveDamageMagic: 333,
      },
    },
  },

  {
    caption: 'Prominence',
    level: 1,
    desc: 'мощное атакующее магическое заклинание',
    once: {
      toFight: {
        _$receiveDamageMagic: 222,
      },
    },
  },

  {
    caption: 'Hurricane',
    level: 1,
    desc: 'мощное атакующее магическое заклинание',
    once: {
      toFight: {
        _$receiveDamageMagic: 111,
      },
    },
  },

  {
    caption: 'Blaze',
    level: 1,
    desc: 'мощное атакующее магическое заклинание',
    once: {
      toFight: {
        _$receiveDamageMagic: 77,
      },
    },
  },

  {
    caption: 'Flare',
    level: 1,
    desc: 'атакующее магическое заклинание. короткий каст и рейндж. режет MAtk',
    once: {
      toFight: {
        _$receiveDamageMagic: 55,
      },
    },
    enforce: {
      MAtk: -15,
    },
  },

  {
    caption: 'Energy Bolt',
    level: 1,
    desc: 'атакующее магическое заклинание. короткий кастинг',
    once: {
      toFight: {
        _$receiveDamageMagic: 33,
      },
    },
  },

  {
    caption: 'Wind Strike',
    level: 1,
    desc: 'атакующее магическое заклинание',
    once: {
      toFight: {
        _$receiveDamageMagic: 22,
      },
    },
  },

  {
    caption: 'Ice Bolt',
    level: 1,
    desc: 'атакующее магическое заклинание. замедляет врага',
    once: {
      toFight: {
        _$receiveDamageMagic: 11,
      },
    },
    enforce: {
      Speed: -25,
    },
  },
]
