export default [
  {
    caption: 'Concentration Aura',
    level: 1n,
    cost: {
      sp: 100n,
      mp: 5,
      hp: 0,
    },
    config: {
      castSpeed: 0,
      castRange: 0,
      massRange: 0,
      abortRange: 0,
      cooldownTotal: 1000,
      isMassive: false,
      isAbortable: false,
      isRequiresTarget: false,
    },
  },
  {
    caption: 'Breathe Aura',
    level: 1n,
    cost: {
      sp: 100n,
      mp: 0,
      hp: 7,
    },
    config: {
      castSpeed: 0,
      castRange: 0,
      massRange: 0,
      abortRange: 0,
      cooldownTotal: 1000,
      isMassive: false,
      isAbortable: false,
      isRequiresTarget: false,
    },
  },
]
