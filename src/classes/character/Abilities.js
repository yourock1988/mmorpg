import EventEmitter from 'node:events'
import Cast from './Cast.js'

export default class Abilities {
  constructor(activities, target, health, mana) {
    this.persists = []
    this.auras = []
    this.buffs = []
    this.debuffs = []
    this.physes = []
    this.conjurs = []
    this.mana = mana
    this.health = health
    this.target = target
    this.activities = activities
    this.state = {
      castProgress: 0,
      get isCastInProcess() {
        this.castProgress !== 0
      },
    }
  }

  castByTypeId(type, id) {
    const ability = this.findAbilityByTypeId(type, id)
    if (ability) this.cast(ability)
  }

  async cast(ability) {
    const { cost, config, status } = ability
    const { mana, health, target, activities, state } = this

    const c = new Cast({
      cost,
      config,
      status,
      mana,
      health,
      target,
      activities,
      state,
      ability,
    })

    c.run()
  }

  learn(ability) {
    this[ability.type + 's'].push(ability)
    if (ability.type === 'persist') this.cast(ability)
  }

  findAbilityByTypeId(type, id) {
    return this[type + 's'].find(a => a.id === id)
  }
  findAbilityByTypeCaption(type, caption) {
    return this[type + 's'].find(a => a.caption === caption)
  }
}
