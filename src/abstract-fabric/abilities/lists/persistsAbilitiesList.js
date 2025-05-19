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
      abortRange: 0,
      cooldownTotal: 0,
      massRange: 0,
      isMassive: false,
      isSwitchable: false,
      isRequiresTarget: true,
      canAbort: false,
    },
    status: {
      canStartCast: false, // computed
      cooldownCurrent: 0,
      castProgress: 0,
      isCastInProcess: false,
      isSwitchedOn: false,
      target: null,
    },
  },
]
