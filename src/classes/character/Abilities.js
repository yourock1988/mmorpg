export default class Abilities {
  constructor(activities) {
    this.persists = [] // Activity, работающий на игроке. включен постоянно
    this.auras = [] // Activity, работающий на игроке вкл и выкл мгновенно
    this.buffs = [] // наносит Activity на время на выбранную цель (CastSpd)
    this.debuffs = [] // наносит Activity на время на выбранную цель (CastSpd)
    this.physes = [] // мгновенно наносит физ урон выбранной цели (AtkSpd)
    this.conjurs = [] // мгновенно наносит маг урон выбранной цели (CastSpd)
    this.activities = activities
    this.activities.on('removed-aura', this.markAuraAsDisabled.bind(this))
  }

  add(ability) {
    this[ability.type + 's'].push(ability)
    if (ability.type === 'persist') this.activities.add(ability.activity)
  }

  toggleAuraById(id, toggle) {
    const findedAura = this.findAbilityByTypeId('aura', id)
    toggle ??= !findedAura.config.isEnabled
    if (findedAura?.config?.isSwitchable) findedAura.config.isEnabled = toggle
    if (findedAura.config.isEnabled) this.activities.add(findedAura.activity)
    else this.activities.remove(findedAura.activity)
  }

  markAuraAsDisabled(activity) {
    const aura = this.findAbilityByTypeCaption('aura', activity.caption)
    aura.config.isEnabled = false
  }

  findAbilityByTypeId(type, id) {
    return this[type + 's'].find(a => a.id === id)
  }
  findAbilityByTypeCaption(type, caption) {
    return this[type + 's'].find(a => a.caption === caption)
  }

  get persistsActivities() {
    return this.persists.map(p => p.activity)
  }
  get aurasActivities() {
    return this.auras.filter(a => a.config.isEnabled).map(a => a.activity)
  }
}
