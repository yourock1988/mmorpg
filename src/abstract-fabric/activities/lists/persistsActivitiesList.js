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
]
