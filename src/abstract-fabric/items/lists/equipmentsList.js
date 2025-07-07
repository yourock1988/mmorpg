export default [
  {
    caption: 'Axe Of Glory',
    kind: 'single',
    hasActivity: false,
    content: {
      slotName: 'weapon',
      grade: 'D',
      stats: { PAtk: 42, AtkSpd: 11 },
    },
  },
  {
    caption: 'Blade Of Blood',
    kind: 'single',
    hasActivity: false,
    content: {
      slotName: 'weapon',
      grade: 'D',
      stats: { PAtk: 33 },
    },
  },
  {
    caption: 'Helmet Of Truth',
    kind: 'single',
    hasActivity: true,
    content: {
      slotName: 'helmet',
      grade: 'D',
      stats: { PDef: 33 },
    },
  },
  {
    caption: 'Gloves Of Monk',
    kind: 'single',
    hasActivity: true,
    content: {
      slotName: 'gloves',
      grade: 'D',
      stats: { PDef: 22 },
    },
  },

  {
    caption: 'Wooden Helmet',
    kind: 'single',
    hasActivity: true,
    content: {
      slotName: 'helmet',
      grade: 'no-grade',
      stats: { PDef: 22 },
    },
  },

  //

  {
    caption: 'Bone Dagger',
    kind: 'single',
    weight: 1150,
    hasActivity: false,
    cost: { money: 2950 },
    content: {
      slotName: 'weapon',
      grade: 'no-grade',
      case: 'dagger',
      rank: 2,
      stats: { PAtk: 7, MAtk: 6, Accuracy: -4, CritRate: 12, AtkSpd: 80 },
      consumes: { soulshot: 1, spiritshot: 0, arrow: 0 },
    },
  },

  {
    caption: 'Club',
    kind: 'single',
    weight: 1870,
    hasActivity: false,
    cost: { money: 2950 },
    content: {
      slotName: 'weapon',
      grade: 'no-grade',
      case: 'blunt',
      rank: 2,
      stats: { PAtk: 8, MAtk: 6, Accuracy: 5, CritRate: 4, AtkSpd: 40 },
      consumes: { soulshot: 1, spiritshot: 0, arrow: 0 },
    },
  },

  {
    caption: 'Squire Sword',
    kind: 'single',
    weight: 1600,
    hasActivity: false,
    cost: { money: 530 },
    content: {
      slotName: 'weapon',
      grade: 'no-grade',
      case: 'sword',
      rank: 1,
      stats: { PAtk: 6, MAtk: 5, Accuracy: 0, CritRate: 8, AtkSpd: 40 },
      consumes: { soulshot: 1, spiritshot: 0, arrow: 0 },
    },
  },

  {
    caption: 'Short Sword',
    kind: 'single',
    weight: 1600,
    hasActivity: false,
    cost: { money: 2950 },
    content: {
      slotName: 'weapon',
      grade: 'no-grade',
      case: 'sword',
      rank: 2,
      stats: { PAtk: 8, MAtk: 6, Accuracy: 0, CritRate: 8, AtkSpd: 40 },
      consumes: { soulshot: 1, spiritshot: 0, arrow: 0 },
    },
  },

  {
    caption: 'Short Bow',
    kind: 'single',
    weight: 1950,
    hasActivity: false,
    cost: { money: 2950 },
    content: {
      slotName: 'weapon',
      grade: 'no-grade',
      case: 'bow',
      rank: 2,
      stats: { PAtk: 16, MAtk: 6, Accuracy: -4, CritRate: 12, AtkSpd: -40 },
      consumes: { soulshot: 2, spiritshot: 0, arrow: 1 },
    },
  },

  {
    caption: 'Spiked Gloves',
    kind: 'single',
    weight: 1590,
    hasActivity: false,
    cost: { money: 2950 },
    content: {
      slotName: 'weapon',
      grade: 'no-grade',
      case: 'fist',
      rank: 2,
      stats: { PAtk: 10, MAtk: 6, Accuracy: 5, CritRate: 4, AtkSpd: 0 },
      consumes: { soulshot: 1, spiritshot: 0, arrow: 0 },
    },
  },

  {
    caption: 'Squire Sword*Squire Sword',
    kind: 'single',
    weight: 2530,
    hasActivity: false,
    cost: { money: 2950 },
    content: {
      slotName: 'weapon',
      grade: 'no-grade',
      case: 'dual',
      rank: 2,
      stats: { PAtk: 10, MAtk: 6, Accuracy: 0, CritRate: 8, AtkSpd: 0 },
      consumes: { soulshot: 1, spiritshot: 0, arrow: 0 },
    },
  },

  {
    caption: 'Short Spear',
    kind: 'single',
    weight: 2140,
    hasActivity: false,
    cost: { money: 2950 },
    content: {
      slotName: 'weapon',
      grade: 'no-grade',
      case: 'pole',
      rank: 2,
      stats: { PAtk: 8, MAtk: 6, Accuracy: -4, CritRate: 8, AtkSpd: 0 },
      consumes: { soulshot: 1, spiritshot: 0, arrow: 0 },
    },
  },

  {
    caption: 'Softcover Spellbook',
    kind: 'single',
    weight: 650,
    hasActivity: false,
    cost: { money: 2950 },
    content: {
      slotName: 'weapon',
      grade: 'no-grade',
      case: 'book',
      rank: 2,
      stats: { MAtk: 8, PAtk: 4, Evasion: -4, CastSpd: 80 },
      consumes: { soulshot: 0, spiritshot: 1 },
    },
  },

  {
    caption: 'Stick Staff',
    kind: 'single',
    weight: 950,
    hasActivity: false,
    cost: { money: 2950 },
    content: {
      slotName: 'weapon',
      grade: 'no-grade',
      case: 'staff',
      rank: 2,
      stats: { MAtk: 10, PAtk: 5, Evasion: -4, CastSpd: 40 },
      consumes: { soulshot: 0, spiritshot: 1 },
    },
  },
]
