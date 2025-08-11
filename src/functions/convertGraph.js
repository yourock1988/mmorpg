const badGraph = {
  Orc: {
    OrcFighter: {
      Raider: {
        Destroyer: {
          Titan: null,
        },
      },
      Monk: {
        Tyrant: {
          GrandKhawatari: null,
        },
      },
    },
    OrcMystic: {
      Shaman: {
        Warcryer: {
          Doomcryer: null,
        },
        Overlord: {
          Dominator: null,
        },
      },
    },
  },
}

const goodGraphSample = {
  Orc: ['OrcFighter', 'OrcMystic'],

  OrcFighter: ['Raider', 'Monk'],

  Raider: ['Destroyer'],
  Destroyer: ['Titan'],
  Titan: [],

  Monk: ['Tyrant'],
  Tyrant: ['GrandKhawatari'],
  GrandKhawatari: [],

  OrcMystic: ['Shaman'],

  Shaman: ['Warcryer', 'Overlord'],

  Warcryer: ['Doomcryer'],
  Doomcryer: [],

  Overlord: ['Dominator'],
  Dominator: [],
}

function convertGraph(badGraph) {
  const goodGraph = {}

  function helper(badGraph) {
    Object.entries(badGraph).forEach(([key, val]) => {
      if (!goodGraph[key]) goodGraph[key] = []
      if (val) {
        goodGraph[key].push(...Object.keys(val))
        helper(val)
      }
    })
  }

  helper(badGraph)

  return goodGraph
}

const goodGraph = convertGraph(badGraph)

console.log(goodGraph)
