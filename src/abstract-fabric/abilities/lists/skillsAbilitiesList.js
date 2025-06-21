export default [
  {
    caption: 'Iron Punch',
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
      cooldownTotal: 3000,
      isMassive: false,
      isAbortable: false,
      isRequiresTarget: true,
    },
  },
]
