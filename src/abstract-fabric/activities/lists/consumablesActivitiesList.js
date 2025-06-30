export default [
  {
    caption: 'Healing Potion',
    level: 1n,
    desc: 'восстанавливает хп',
    pulse: {
      toHealth: {
        $gain: 7,
      },
    },
  },
]
