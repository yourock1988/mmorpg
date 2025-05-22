import EventEmitter from 'node:events'

export default class Abilities extends EventEmitter {
  constructor(activities, target, health, mana) {
    super()
    this.persists = [] // Activity, работающий на игроке. включен постоянно
    this.auras = [] // Activity, работающий на игроке вкл и выкл мгновенно
    this.buffs = [] // наносит Activity на время на выбранную цель (CastSpd)
    this.debuffs = [] // наносит Activity на время на выбранную цель (CastSpd)
    this.physes = [] // мгновенно наносит физ урон выбранной цели (AtkSpd)
    this.conjurs = [] // мгновенно наносит маг урон выбранной цели (CastSpd)
    this.mana = mana
    this.health = health
    this.target = target
    this.activities = activities
    // this.activities.on('removed-aura', this.markAuraAsDisabled.bind(this))
    this.state = {
      castProgress: 0,
      get isCastInProcess() {
        this.castProgress !== 0
      },
      startCast(stage3) {
        console.log('startCast')
        const intervalId = setInterval(() => {
          if (this.castProgress > 100) {
            this.castProgress = 0
            clearInterval(intervalId)
            console.log('castEnd')
            stage3()
            return
          }
          if (this.castProgress % 16 === 4) console.log(this.castProgress)
          this.castProgress++
        }, 10)
        return intervalId
      },
    }
  }

  castByTypeId(type, id) {
    const ability = this.findAbilityByTypeId(type, id)
    if (ability) this.cast(ability)
  }

  cast(ability) {
    const { cost, config, status } = ability
    const { mana, health, target, activities, state } = this
    let intervalId2

    stage1.call(this)

    function stage1() {
      console.log('stage1')
      if (state.castProgress !== 0) return
      if (state.isCastInProcess) return
      if (status.isSwitchedOn) return
      if (status.cooldownCurrent !== 0) return
      if (config.isRequiresTarget) {
        if (!target.hasTarget) return
        if (target.distance > config.castRange) {
          target.goto()
          setTimeout(stage1, 1000)
          return
        }
      }
      stage2.call(this)
    }

    function stage2() {
      console.log('stage2')
      if (health.current < cost.hp || mana.current < cost.mp) return
      health.lose(cost.hp)
      mana.lose(cost.mp)
      const intervalId = state.startCast(stage3)
      this.on('abort', () => clearInterval(intervalId))
      intervalId2 = setInterval(() => {
        if (config.isRequiresTarget && target.distance > config.abortRange) {
          this.emit('abort')
        }
      }, 100)
    }

    function stage3() {
      clearInterval(intervalId2)
      console.log('stage3')
      const activity = ability.createActivity()
      if (config.isRequiresTarget && target.hasTarget) {
        target.subject.activities.add(activity)
      }
      if (!config.isRequiresTarget) {
        activities.add(activity)
      }
    }
  }

  learn(ability) {
    this[ability.type + 's'].push(ability)
    if (ability.type === 'persist') {
      this.cast(ability)
    }
  }

  findAbilityByTypeId(type, id) {
    return this[type + 's'].find(a => a.id === id)
  }
  findAbilityByTypeCaption(type, caption) {
    return this[type + 's'].find(a => a.caption === caption)
  }

  // markAuraAsDisabled(activity) {
  //   const aura = this.findAbilityByTypeCaption('aura', activity.caption)
  //   aura.status.isSwitchedOn = false
  // }
  // toggleAuraById(id, toggle) {
  //   const findedAura = this.findAbilityByTypeId('aura', id)
  //   if (!findedAura) throw new Error(`ауры с таким id не существует`)
  //   toggle ??= !findedAura.status.isSwitchedOn
  //   if (findedAura.config.isSwitchable) findedAura.status.isSwitchedOn = toggle
  //   if (findedAura.status.isSwitchedOn) this.activities.add(findedAura.activity)
  //   else this.activities.remove(findedAura.activity)
  // }
  // get persistsActivities() {
  //   return this.persists.map(p => p.activity)
  // }
  // get aurasActivities() {
  //   return this.auras.filter(a => a.status.isSwitchedOn).map(a => a.activity)
  // }
}
