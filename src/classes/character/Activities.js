export default class Activities {
  constructor() {
    this.persists = []
    this.auras = []
    this.buffs = []
    this.debuffs = []
    this.equipments = []
    this.consumables = []
    this.skills = []
    this.spells = []
    this.statsCombat = null
    this.health = null
    this.mana = null
    this.fight = null
  }

  add(activity) {
    //! только если не селф баф
    // возможно гораздо лучше это передвинуть в Cast.stage6
    activity.self.health = this.health
    activity.self.social = this.fight?.social
    //
    const { duration } = activity.config
    if (duration > 0) {
      this[activity.type + 's'].push(activity)
    }
    if (0 < duration && duration < Infinity) {
      let timeoutArgs = [() => this.remove(activity), duration]
      activity.status.durationTimeoutId = setTimeout(...timeoutArgs)
    }
    activity.justOnce(this.statsCombat, this.health, this.mana, this.fight)
    activity.pulseStart(this.statsCombat, this.health, this.mana)
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
      'skills',
      'spells',
    ].forEach(t => this[t].map(a => a).forEach(this.remove.bind(this)))
  }
  removeByTypes(types) {
    types.forEach(t => this[t].map(a => a).forEach(this.remove.bind(this)))
  }
  removeByTypeId(type, activityId) {
    const findedActivity = this[type + 's'].find(a => a.id === activityId)
    if (findedActivity) this.remove(findedActivity)
  }
  removeByTypeCaption(type, caption) {
    const findedActivity = this[type + 's'].find(a => a.caption === caption)
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
      ...this.skills,
      ...this.spells,
    ]
  }
}
