export default [
  {
    caption: 'Heart Of Lion',
    level: 1n,
    cost: {
      sp: 100n,
      mp: 50n,
      hp: 0n,
    },
    config: {
      castSpeed: 500,
      castRange: 5000,
      abortRange: 8000,
      cooldownTotal: 15000,
      massRange: 0,
      isMassive: false,
      isSwitchable: false,
      isRequiresTarget: true,
      canAbort: true,
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
  {
    caption: 'Haste',
    level: 1n,
    cost: {
      sp: 100n,
      mp: 50n,
      hp: 0n,
    },
    config: {
      castSpeed: 500,
      castRange: 5000,
      abortRange: 8000,
      cooldownTotal: 15000,
      massRange: 0,
      isMassive: false,
      isSwitchable: false,
      isRequiresTarget: true,
      canAbort: true,
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
