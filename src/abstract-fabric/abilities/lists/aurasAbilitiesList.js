export default [
  {
    caption: 'Concentration Aura',
    level: 1n,
    cost: {
      sp: 100n,
      mp: 5n,
      hp: 0n,
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
    status: {
      cooldownCurrent: 0,
    },
  },
  {
    caption: 'Breathe Aura',
    level: 1n,
    cost: {
      sp: 100n,
      mp: 0n,
      hp: 7n,
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
    status: {
      cooldownCurrent: 0,
    },
  },
]
