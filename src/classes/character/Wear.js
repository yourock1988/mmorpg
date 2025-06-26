export default class Wear {
  #activities

  constructor(activities) {
    this.weapon = null
    this.helmet = null
    this.upper = null
    this.lower = null
    this.boots = null
    this.gloves = null
    this.shield = null
    this.necklace = null
    this.ringLeft = null
    this.ringRight = null
    this.earringLeft = null
    this.earringRight = null
    this.#activities = activities
  }

  get stats() {
    return Object.values(this)
      .filter(v => v)
      .reduce(
        (acc, { stats }) =>
          Object.entries(stats).reduce(
            (acc, [key, val]) => ({
              ...acc,
              [key]: acc[key] ? acc[key] + val : val,
            }),
            acc
          ),
        {}
      )
  }

  get listActivities() {
    return Object.values(this)
      .filter(v => v?.activity)
      .map(v => v.activity)
  }

  mount(equipment) {
    const oldEquip = this[equipment.slotName]
    this[equipment.slotName] = equipment
    if (!this.#activities) return oldEquip
    if (oldEquip?.hasActivity) this.#activities.remove(oldEquip.activity)
    if (equipment?.hasActivity) this.#activities.add(equipment.activity)
    return oldEquip
  }

  umountBySlotName(slotName) {
    const oldEquip = this[slotName]
    this[slotName] = null
    if (!this.#activities) return oldEquip
    if (oldEquip?.hasActivity) this.#activities.remove(oldEquip.activity)
    return oldEquip
  }
}
