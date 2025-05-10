export default class Activities {
  constructor(abilities, skills) {
    this.abilities = abilities?.list ?? []
    // this.skills = skills.enabled
    this.buffs = []
    this.debuffs = []
    this.equipmentAuras = []
    this.consumedItemsEffects = []
  }

  add(activity) {
    // setTimeout(() => {
    //   this[activity.type + 's'] = this[activity.type + 's'].filter(
    //     a => a.id !== activity.id
    //   )
    // }, activity.duration * 1000)
    this[activity.type + 's'].push(activity)
  }

  get list() {
    return [
      ...this.buffs,
      ...this.equipmentAuras,
      ...this.debuffs,
      ...this.abilities,
    ]
  }
}
