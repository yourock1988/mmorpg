export default class Activities {
  constructor(abilities, wear) {
    // this.abilities = abilities
    // this.wear = wear
    this.persists = []
    this.auras = []
    this.buffs = []
    this.debuffs = []
    this.consumeds = []
    this.equipments = []
  }

  interlinkedWithinHealth(health) {
    this.health = health
    this.health.on('life-is-over', this.removeAll.bind(this))
  }

  removeAll() {
    let l = ['persists', 'auras', 'buffs', 'debuffs', 'consumeds', 'equipments']
    l.forEach(key => this[key].forEach(this.remove.bind(this)))
  }

  get enforces() {
    return this.list.map(activity => activity.enforce)
  }

  add(activity) {
    this[activity.type + 's'].push(activity)
    if (!activity.config.canPulsing) return
    if (!this.health) return
    activity.pulseStart(this.combat, this.health, this.mana)
    if (activity.config.duration === Infinity) return
    setTimeout(() => this.remove(activity), activity.config.duration)
  }

  remove(activity) {
    // console.log('removed:', activity.caption)
    const idx = this[activity.type + 's'].indexOf(activity)
    activity.pulseStop()
    this[activity.type + 's'].splice(idx, 1)
  }

  removeById(activityId) {}

  get list() {
    return [
      ...this.persists,
      ...this.auras,
      ...this.buffs,
      ...this.debuffs,
      ...this.equipments,
      ...this.consumeds,
    ]
  }
}

// if (['persist', 'aura', 'equipment'].includes(activity.type)) {
//   throw new Error('wrong activity to add. this type is reactive')
// }

// setTimeout(() => {
//   this[activity.type + 's'] = this[activity.type + 's'].filter(
//     a => a.id !== activity.id
//   )
// }, activity.duration * 1000)

// get persists() {
//   return this.abilities?.persistsActivities ?? []
// }

// get auras() {
//   return this.abilities?.aurasActivities ?? []
// }

// get equipments() {
//   return this.wear?.equipmentsActivities ?? []
// }

// get pulses() {
//   return this.list.map(activity => activity.pulse)
// }
