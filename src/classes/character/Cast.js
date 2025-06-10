export default class Cast {
  constructor({ state, status, config, target, health, mana, cost }) {
    this.state = state
    this.status = status
    this.config = config
    this.target = target
    this.health = health
    this.mana = mana
    this.cost = cost
  }

  async run(activities, ability) {
    this.stage1(this.state, this.status) &&
      (await this.stage2(this.config, this.target)) &&
      this.stage3(this.health, this.mana, this.cost) &&
      (await this.stage4(this.config, this.target, this.state)) &&
      this.stage5(this.config, this.target, activities, ability)
  }

  stage1(state, status) {
    // console.log('stage1')
    if (state.castProgress !== 0) return false
    if (state.isCastInProcess) return false
    if (status.isSwitchedOn) return false
    if (status.cooldownCurrent !== 0) return false
    return true
  }

  async stage2(config, target) {
    // console.log('stage2')
    if (config.isRequiresTarget) {
      if (!target.hasTarget) {
        console.log('требуется цель')
        return false
      }
      if (target.distance > config.castRange) {
        console.log('цель слишком далеко. преследую цель.')
        return await target.goto()
      }
    }
    return true
  }

  stage3(health, mana, cost) {
    // console.log('stage3')
    if (health.current < cost.hp || mana.current < cost.mp) return false
    health.lose(cost.hp)
    mana.lose(cost.mp)
    return true
  }

  async stage4(config, target, state) {
    // console.log('stage4')
    return await new Promise(resolve => {
      const intervalId = setInterval(() => {
        state.castProgress++
        if (state.castProgress > 100) {
          state.castProgress = 0
          // console.log('cast completed')
          clearInterval(intervalId)
          resolve(true)
        }
        if (config.isRequiresTarget && target.distance > config.abortRange) {
          console.log('cast aborted')
          clearInterval(intervalId)
          resolve(false)
        }
        // if (state.castProgress % 16 === 4) console.log(state.castProgress)
      }, 10)
    })
  }

  stage5(config, target, activities, ability) {
    // console.log('stage5')
    const activity = ability.createActivity()
    if (!config.isRequiresTarget) {
      activities.add(activity)
    }
    if (config.isRequiresTarget && target.hasTarget) {
      target.subject.activities.add(activity)
    }
  }
}
