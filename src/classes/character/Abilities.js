import Ability from '../../abstract-fabric/abilities/Ability.js'
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

  async castByTypeId(type, id) {
    const ability = this.findAbilityByTypeId(type, id)
    if (ability) await this.cast(ability)
  }

  async cast(ability) {
    if (!(ability instanceof Ability)) return
    const { cost, config, status } = ability
    const { mana, health, target, activities, state } = this
    const cast = new Cast({ state, status, config, target, health, mana, cost })
    return await cast.run(activities, ability)
  }

  async learn(ability) {
    this[ability.type + 's'].push(ability)
    if (ability.type === 'persist') await this.cast(ability)
  }

  findAbilityByTypeId(type, id) {
    return this[type + 's'].find(a => a.id === id)
  }
  findAbilityByTypeCaption(type, caption) {
    return this[type + 's'].find(a => a.caption === caption)
  }
}
