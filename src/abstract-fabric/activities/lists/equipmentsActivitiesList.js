export default [
  {
    caption: 'Helmet Of Truth',
    level: 1n,
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
    level: 1n,
    desc: 'увеличивает макс мп',
    enforce: {
      toStatsCombat: {
        hpTotal: 10,
        mpTotal: 10,
      },
    },
  },
]
