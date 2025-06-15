export default [
  {
    caption: 'Defensive Persist',
    level: 1n,
    cost: {
      sp: 100n,
      mp: 0,
      hp: 0,
    },
    config: {
      castSpeed: 0,
      castRange: 0,
      massRange: 0,
      abortRange: 0,
      cooldownTotal: 0,
      isMassive: false,
      isAbortable: false,
      isRequiresTarget: false,
    },
    status: {
      cooldownCurrent: 0,
    },
  },
]
