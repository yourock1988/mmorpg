export default class Abilities {
  constructor(activities) {
    this.activities = activities
    this.persists = [] // Activity, работающий на игроке. включен постоянно
    this.auras = [] // Activity, работающий на игроке вкл и выкл мгновенно
    this.buffs = [] // наносит Activity на время на выбранную цель (CastSpd)
    this.debuffs = [] // наносит Activity на время на выбранную цель (CastSpd)
    this.physes = [] // мгновенно наносит физ урон выбранной цели (AtkSpd)
    this.conjurs = [] // мгновенно наносит маг урон выбранной цели (CastSpd)
    // this.charms = []  мгновенно наносит Activity на выбранную цель (CastSpd)
  }

  add(ability) {
    this[ability.type + 's'].push(ability)
    if (ability.type === 'persist') this.activities.add(ability.activity)
  }

  toggleAuraById(id, q) {
    const findedAbility = this.findAbilityByTypeId('aura', id)
    if (findedAbility?.config?.isSwitchable) findedAbility.config.isEnabled = q
    if (findedAbility.config.isEnabled) {
      this.activities.add(findedAbility.activity)
    } else {
      this.activities.remove(findedAbility.activity)
    }
  }

  findAbilityByTypeId(type, id) {
    return this[type + 's'].find(a => a.id === id)
  }

  get persistsActivities() {
    return this.persists.map(p => p.activity)
  }

  get aurasActivities() {
    return this.auras.filter(a => a.config.isEnabled).map(a => a.activity)
  }
}
