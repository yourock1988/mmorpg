export default [
  {
    caption: 'Curse Poison',
    level: 1n,
    cost: {
      sp: 100n,
      mp: 50,
      hp: 0,
    },
    config: {
      castSpeed: 500,
      castRange: 5000,
      massRange: 0,
      abortRange: 8000,
      cooldownTotal: 15000,
      isMassive: false,
      isAbortable: true,
      isRequiresTarget: true,
    },
    status: {
      cooldownCurrent: 0,
    },
  },
]
