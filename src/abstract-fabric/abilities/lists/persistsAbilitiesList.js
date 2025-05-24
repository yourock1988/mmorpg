export default [
  {
    caption: 'Defensive Persist',
    level: 1n,
    cost: {
      sp: 100n,
      mp: 0n,
      hp: 0n,
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
