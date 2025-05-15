import EventEmitter from 'node:events'
import Activity from '../Activity.js'
import Health from './Health.js'
import Mana from './Mana.js'

export default class Activities extends EventEmitter {
  constructor() {
    super()
    this.persists = []
    this.auras = []
    this.buffs = []
    this.debuffs = []
    this.consumeds = []
    this.equipments = []
  }

  interlinkedWithinHealth(health) {
    if (!(health instanceof Health)) throw new Error('wrong health inst')
    this.health = health
    this.health.on('life-is-over', this.removeAll.bind(this))
  }
  interlinkedWithinMana(mana) {
    if (!(mana instanceof Mana)) throw new Error('wrong mana inst')
    this.mana = mana
    this.mana.on('mana-is-over', () => this.removeAll(['auras']))
  }

  add(activity) {
    if (!(activity instanceof Activity)) throw new Error('wrong activity inst')
    this[activity.type + 's'].push(activity)
    if (!activity.config.canPulsing) return
    if (!this.health) return
    activity.pulseStart(this.combat, this.health, this.mana)
    if (activity.config.duration === Infinity) return
    setTimeout(() => this.remove(activity), activity.config.duration)
  }

  remove(activity) {
    if (!(activity instanceof Activity)) throw new Error('wrong activity inst')
    const idx = this[activity.type + 's'].indexOf(activity)
    activity.pulseStop()
    this[activity.type + 's'].splice(idx, 1)
    if (activity.type === 'aura') this.emit('removed-aura', activity)
  }
  removeAll(list) {
    let l = ['persists', 'auras', 'buffs', 'debuffs', 'consumeds', 'equipments']
    ;(list ?? l).forEach(key => this[key].forEach(this.remove.bind(this)))
  }
  removeById(activityId) {}

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
      ...this.consumeds,
    ]
  }
}
