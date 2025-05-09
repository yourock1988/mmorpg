export default class Wear {
  constructor() {
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

  // get nForces2Health() {
  //   return Object.values(this)
  //     .filter(v => v)
  //     .reduce(
  //       (acc, { nForce2Health }) =>
  //         nForce2Health ? acc.concat(nForce2Health) : acc,
  //       []
  //     )
  // }

  // get nForces2Mana() {
  //   return Object.values(this)
  //     .filter(v => v)
  //     .reduce(
  //       (acc, { nForce2Mana }) => (nForce2Mana ? acc.concat(nForce2Mana) : acc),
  //       []
  //     )
  // }

  mount(equipment) {
    const oldEquipment = this[equipment.slotName]
    this[equipment.slotName] = equipment
    return oldEquipment
  }

  umountBySlotName(slotName) {
    const oldEquipment = this[slotName]
    this[slotName] = null
    return oldEquipment
  }

  // setWeapon(weapon) {
  //   if (weapon instanceof Equipment) this.weapon = weapon
  // }

  // setHelmet(helmet) {
  //   if (helmet instanceof Equipment) this.helmet = helmet
  // }
  // setUpper(upper) {
  //   if (upper instanceof Equipment) this.upper = upper
  // }
  // setLower(lower) {
  //   if (lower instanceof Equipment) this.lower = lower
  // }
  // setBoots(boots) {
  //   if (boots instanceof Equipment) this.boots = boots
  // }
  // setGloves(gloves) {
  //   if (gloves instanceof Equipment) this.gloves = gloves
  // }
  // setShield(shield) {
  //   if (shield instanceof Equipment) this.shield = shield
  // }

  // setNecklace(necklace) {
  //   if (necklace instanceof Equipment) this.necklace = necklace
  // }
  // setRingLeft(ringLeft) {
  //   if (ringLeft instanceof Equipment) this.ringLeft = ringLeft
  // }
  // setRingRight(ringRight) {
  //   if (ringRight instanceof Equipment) this.ringRight = ringRight
  // }
  // setEarringLeft(earringLeft) {
  //   if (earringLeft instanceof Equipment) this.earringLeft = earringLeft
  // }
  // setEarringRight(earringRight) {
  //   if (earringRight instanceof Equipment) this.earringRight = earringRight
  // }
}
