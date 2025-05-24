export default class Cast {
  constructor({
    activities,
    ability,
    config,
    target,
    state,
    status,
    health,
    mana,
    cost,
  }) {
    this.activities = activities
    this.ability = ability
    this.config = config
    this.target = target
    this.state = state
    this.status = status
    this.health = health
    this.mana = mana
    this.cost = cost
  }

  async run() {
    let res1 = this.stage1(this.state, this.status)
    console.log(res1)
    if (!res1) return
    let res2 = await this.stage2(this.config, this.target)
    console.log(res2)
    if (!res2) return
    let res3 = this.stage3(this.health, this.mana, this.cost)
    console.log(res3)
    if (!res3) return
    let res4 = await this.stage4(this.config, this.target, this.state)
    console.log(res4)
    if (!res4) return
    this.stage5(this.config, this.target, this.activities, this.ability)
  }

  stage1(state, status) {
    console.log('stage1')
    if (state.castProgress !== 0) return false
    if (state.isCastInProcess) return false
    if (status.isSwitchedOn) return false
    if (status.cooldownCurrent !== 0) return false
    return true
  }

  async stage2(config, target) {
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

  stage3(health, mana, cost) {
    console.log('stage3')
    if (health.current < cost.hp || mana.current < cost.mp) return false
    health.lose(cost.hp)
    mana.lose(cost.mp)
    return true
  }

  async stage4(config, target, state) {
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

  stage5(config, target, activities, ability) {
    console.log('stage5')
    const activity = ability.createActivity()
    if (!config.isRequiresTarget) {
      activities.add(activity)
    }
    if (config.isRequiresTarget && target.hasTarget) {
      target.subject.activities.add(activity)
    }
  }
}
