export default [
  {
    caption: 'Iron Punch',
    level: 1n,
    desc: 'наносит мощный физический удар',
    once: {
      toFight: {
        _$receiveDamagePhys: 77,
      },
    },
  },
]
