export default [
  {
    caption: 'Curse Poison',
    level: 1,
    desc: 'уменьшает макс хп и реген хп',
    enforce: {
      toStatsCombat: {
        hpTotal: -10,
      },
    },
    pulse: {
      toHealth: {
        _$lose: 6,
      },
    },
  },
]
