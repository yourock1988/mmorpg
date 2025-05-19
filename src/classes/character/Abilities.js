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

  castByTypeId(type, id, targetActivities = this.activities) {
    const ability = this.findAbilityByTypeId(type, id)
    if (!ability) return
    ability.cast(targetActivities)
  }

  learn(ability) {
    this[ability.type + 's'].push(ability)
    if (ability.type === 'persist') {
      ability.cast(this.activities)
    }
  }

  // toggleAuraById(id, toggle) {
  //   const findedAura = this.findAbilityByTypeId('aura', id)
  //   if (!findedAura) throw new Error(`ауры с таким id не существует`)
  //   toggle ??= !findedAura.status.isSwitchedOn
  //   if (findedAura.config.isSwitchable) findedAura.status.isSwitchedOn = toggle
  //   if (findedAura.status.isSwitchedOn) this.activities.add(findedAura.activity)
  //   else this.activities.remove(findedAura.activity)
  // }

  markAuraAsDisabled(activity) {
    const aura = this.findAbilityByTypeCaption('aura', activity.caption)
    aura.status.isSwitchedOn = false
  }

  findAbilityByTypeId(type, id) {
    return this[type + 's'].find(a => a.id === id)
  }
  findAbilityByTypeCaption(type, caption) {
    return this[type + 's'].find(a => a.caption === caption)
  }

  // get persistsActivities() {
  //   return this.persists.map(p => p.activity)
  // }
  // get aurasActivities() {
  //   return this.auras.filter(a => a.status.isSwitchedOn).map(a => a.activity)
  // }
}
