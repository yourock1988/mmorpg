import Delayer from '../Delayer.js'
import Cast from './Cast.js'

export default class Abilities {
  constructor(activities, target, health, mana) {
    this.persists = []
    this.auras = []
    this.buffs = []
    this.debuffs = []
    this.skills = []
    this.spells = []
    this.mana = mana
    this.health = health
    this.target = target
    this.activities = activities
    this.state = {
      castProgress: 0,
    }
  }

  async castByTypeId(type, id) {
    const ability = this.findAbilityByTypeId(type, id)
    if (ability) await this.cast(ability)
  }

  async cast(ability) {
    const { cost, config, status, type } = ability
    const { mana, health, target, activities, state } = this
    const delayer = new Delayer(activities.statsCombat)
    const cast = new Cast({ state, status, config, target, health, mana, cost })
    const result = await cast.run(activities, ability, delayer)
    const social = activities.fight?.social
    const badAbilities = ['debuff', 'skill', 'spell']
    if (result && config.isRequiresTarget && badAbilities.includes(type)) {
      if (target.subject.social) social.activateModePvP()
      if (!target.subject.social) social.activateModePvE()
    }
    return result
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
