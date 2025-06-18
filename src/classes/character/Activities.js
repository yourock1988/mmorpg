export default class Activities {
  constructor() {
    this.persists = []
    this.auras = []
    this.buffs = []
    this.debuffs = []
    this.equipments = []
    this.consumables = []
    this.statsCombat = null
    this.health = null
    this.mana = null
  }

  add(activity) {
    this[activity.type + 's'].push(activity)
    if (activity.config.duration !== Infinity) {
      let timeoutArgs = [() => this.remove(activity), activity.config.duration]
      activity.status.durationTimeoutId = setTimeout(...timeoutArgs)
    }
    if (activity.config.isPulsing) {
      activity.pulseStart(this.statsCombat, this.health, this.mana)
    }
  }

  remove(activity) {
    const idx = this[activity.type + 's'].indexOf(activity)
    activity.pulseStop()
    this[activity.type + 's'].splice(idx, 1)
  }
  removeAll() {
    ;[
      'persists',
      'auras',
      'buffs',
      'debuffs',
      'equipments',
      'consumables',
    ].forEach(t => this[t].map(a => a).forEach(this.remove.bind(this)))
  }
  removeByTypes(types) {
    types.forEach(t => this[t].map(a => a).forEach(this.remove.bind(this)))
  }
  removeByTypeId(type, activityId) {
    const findedActivity = this[type + 's'].find(a => a.id === activityId)
    if (findedActivity) this.remove(findedActivity)
  }

  get enforces() {
    return this.list.map(activity => activity.enforce)
  }
  get list() {
    return [
      ...this.persists,
      ...this.auras,
      ...this.buffs,
      ...this.debuffs,
      ...this.equipments,
      ...this.consumables,
    ]
  }
}
