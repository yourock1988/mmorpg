export default [
  {
    caption: 'Hydro Blast',
    level: 1n,
    desc: 'наносит мощный магический удар',
    once: {
      toFight: {
        _$receiveDamageMagic: 77,
      },
    },
  },
]
