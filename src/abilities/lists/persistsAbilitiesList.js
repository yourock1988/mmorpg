export default [
  {
    caption: 'Defensive Persist',
    level: 1n,
    cost: {
      sp: 123n,
    },
    handling: {
      isEnabled: true,
      enable() {
        this.isEnabled = true
      },
      disable() {
        this.isEnabled = false
      },
    },
  },
]
