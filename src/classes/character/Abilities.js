import EventEmitter from 'node:events'

function stage1(state, status) {
  console.log('stage1')
  if (state.castProgress !== 0) return false
  if (state.isCastInProcess) return false
  if (status.isSwitchedOn) return false
  if (status.cooldownCurrent !== 0) return false
  return true
}

async function stage2(config, target) {
  console.log('stage2')
  if (config.isRequiresTarget) {
    if (!target.hasTarget) return false
    if (target.distance > config.castRange) {
      console.log('цель слишком далеко. преследую цель.')
      return await target.goto()
    }
  }
  return true
}

function stage3(health, mana, cost) {
  console.log('stage3')
  if (health.current < cost.hp || mana.current < cost.mp) return false
  health.lose(cost.hp)
  mana.lose(cost.mp)
  return true
}

async function stage4(config, target, state) {
  console.log('stage4')
  return await new Promise(resolve => {
    const intervalId = setInterval(() => {
      state.castProgress++
      if (state.castProgress > 100) {
        state.castProgress = 0
        console.log('cast completed')
        clearInterval(intervalId)
        resolve(true)
      }
      if (config.isRequiresTarget && target.distance > config.abortRange) {
        console.log('cast aborted')
        clearInterval(intervalId)
        resolve(false)
      }
      if (state.castProgress % 16 === 4) console.log(state.castProgress)
    }, 10)
  })
}

function stage5(config, target, activities, ability) {
  console.log('stage5')
  const activity = ability.createActivity()
  if (!config.isRequiresTarget) {
    activities.add(activity)
  }
  if (config.isRequiresTarget && target.hasTarget) {
    target.subject.activities.add(activity)
  }
}

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

    let res1 = stage1(state, status)
    console.log(res1)
    if (!res1) return
    let res2 = await stage2(config, target)
    console.log(res2)
    if (!res2) return
    let res3 = stage3(health, mana, cost)
    console.log(res3)
    if (!res3) return
    let res4 = await stage4(config, target, state)
    console.log(res4)
    if (!res4) return
    let res5 = stage5(config, target, activities, ability)
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
