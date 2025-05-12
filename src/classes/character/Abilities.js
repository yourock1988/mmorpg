export default class Abilities {
  constructor() {
    this.persists = [] // Activity, работающий на игроке. включен постоянно
    this.auras = [] // Activity, работающий на игроке вкл и выкл мгновенно
    this.buffs = [] // наносит Activity на время на выбранную цель (CastSpd)
    this.debuffs = [] // наносит Activity на время на выбранную цель (CastSpd)
    this.physes = [] // мгновенно наносит физ урон выбранной цели (AtkSpd)
    this.conjurs = [] // мгновенно наносит маг урон выбранной цели (CastSpd)
    this.charms = [] // мгновенно наносит Activity на выбранную цель (CastSpd)
  }

  add(ability) {
    this[ability.type + 's'].push(ability)
  }

  findAbilityByTypeId(type, id) {
    return this[type + 's'].find(a => a.id === id)
  }

  toggleAuraById(id, toggle) {
    const findedAbility = this.findAbilityByTypeId('aura', id)
    if (findedAbility) findedAbility.enabled = toggle
  }

  get persistsActivities() {
    return this.persists.map(p => p.activity)
  }

  get aurasActivities() {
    return this.auras.filter(a => a.enabled).map(a => a.activity)
  }
}
