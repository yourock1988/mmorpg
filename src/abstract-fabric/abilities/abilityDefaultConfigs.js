export default {
  auras: {
    castSpeed: 0,
    castRange: 0,
    massRange: 0,
    abortRange: 0,
    cooldownTotal: 1000,
    isMassive: false,
    isAbortable: false,
    isRequiresTarget: false,
  },

  persists: {
    castSpeed: 0,
    castRange: 0,
    massRange: 0,
    abortRange: 0,
    cooldownTotal: 0,
    isMassive: false,
    isAbortable: false,
    isRequiresTarget: false,
  },

  buffs: {
    isAbortable: true,
    isRequiresTarget: true,
  },

  debuffs: {
    isAbortable: true,
    isRequiresTarget: true,
  },

  skills: {
    isAbortable: false,
  },

  spells: {
    isAbortable: true,
  },
}
