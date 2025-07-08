export default [
  {
    caption: 'Helmet Of Truth',
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
  {
    caption: 'Gloves Of Monk',
    level: 1,
    desc: 'увеличивает макс мп',
    enforce: {
      toStatsCombat: {
        hpTotal: 10,
        mpTotal: 10,
      },
    },
  },

  //

  {
    caption: 'Wisdom Set',
    level: 1,
    desc: 'Max MP +33, Regen MP +11, M. Def. +3.3%.',
    enforce: {
      toStatsCombat: {
        mpTotal: 33,
        mpRegen: 11,
        MDef: 3.3,
      },
    },
  },

  {
    caption: 'Wooden Set',
    level: 1,
    desc: 'Max HP +41, P. Def. +2.2%.',
    enforce: {
      toStatsCombat: {
        hpTotal: 41,
        PDef: 2.2,
      },
    },
  },

  {
    caption: 'Bone Set',
    level: 1,
    desc: 'Max HP +61, P. Def. +4.4%.',
    enforce: {
      toStatsCombat: {
        hpTotal: 61,
        PDef: 4.4,
      },
    },
  },

  {
    caption: 'Cotton Set',
    level: 1,
    desc: 'Max MP +42, Regen MP +4.2',
    enforce: {
      toStatsCombat: {
        mpTotal: 42,
        mpRegen: 4.2,
      },
    },
  },

  {
    caption: 'Cotton Hat',
    level: 1,
    desc: 'Max MP +9',
    enforce: {
      toStatsCombat: {
        mpTotal: 9,
      },
    },
  },

  {
    caption: 'Cotton Tunic',
    level: 1,
    desc: 'Max MP +29',
    enforce: {
      toStatsCombat: {
        mpTotal: 29,
      },
    },
  },

  {
    caption: 'Cotton Stockings',
    level: 1,
    desc: 'Max MP +19',
    enforce: {
      toStatsCombat: {
        mpTotal: 19,
      },
    },
  },
]
