// once: toFight toHealth toMana
// pulse: toHealth toMana
// enforce: toStatsCombat

export default {
  once: {
    toFight: {
      _$receiveDamageMagic: 77,
    },
    toHealth: {
      _$lose: 37,
    },
    toMana: {
      $gain: 37,
    },
  },
  pulse: {
    // toHealth: {
    //   _$lose: 7,
    // },
    // toMana: {
    //   $gain: 7,
    // },
    toHealth: {
      $gain: 'o.statsCombat.current.hpRegen',
    },
    toMana: {
      $gain: 'o.statsCombat.current.mpRegen',
    },
    // toHealth: 'health.gain(health.statsCombat.current.hpRegen)',
    // toMana: 'mana.gain(mana.statsCombat.current.mpRegen)',
  },
  enforce: {
    toStatsCombat: {
      hpRegen: -10,
      mpTotal: -10,
      PDef: 10,
      AtkSpd: 10,
    },
  },
}
