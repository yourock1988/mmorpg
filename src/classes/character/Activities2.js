export default class Activities {
  constructor(abilities, wear) {
    this.abilities = abilities
    this.wear = wear
    this.buffs = []
    this.debuffs = []
    this.consumeds = []
  }

  add(activity) {
    if (['persist', 'aura', 'equipment'].includes(activity.type)) {
      throw new Error('wrong activity to add. this type is reactive')
    }
    // setTimeout(() => {
    //   this[activity.type + 's'] = this[activity.type + 's'].filter(
    //     a => a.id !== activity.id
    //   )
    // }, activity.duration * 1000)

    this[activity.type + 's'].push(activity)
  }

  get persists() {
    return this.abilities?.persistsActivities ?? []
  }

  get auras() {
    return this.abilities?.aurasActivities ?? []
  }

  get equipments() {
    return this.wear?.equipmentsActivities ?? []
  }

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

  get enforces() {
    return this.list.map(activity => activity.enforce)
  }
}
