import progressive from '../../functions/progressive.js'

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

  async run(activities, ability, delayer) {
    return (
      this.stage1(this.state, this.status) &&
      (await this.stage2(this.config, this.target)) &&
      this.stage3(this.health, this.mana, this.cost) &&
      this.stage4(this.config, this.status, delayer) &&
      (await this.stage5(this.config, this.target, this.state, delayer)) &&
      this.stage6(this.config, this.target, activities, ability)
    )
  }

  stage1(state, status) {
    // console.log('stage1')
    if (state.castProgress !== 0) return false
    if (status.cooldownCurrent !== 0) return false
    return true
  }

  async stage2(config, target) {
    // console.log('stage2')
    if (config.isRequiresTarget) {
      if (!target.hasTarget) {
        // console.log('требуется цель')
        return false
      }
      if (target.hasTarget && !target.subject.health?.isLive) {
        // console.log('цель должна быть живая');
        return false
      }
      if (target.distance > config.castRange) {
        // console.log('цель слишком далеко. преследую цель.')
        return await target.goto(config.castRange)
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

  stage4(config, status, delayer) {
    // console.log('stage4')
    const { promise, resolve } = Promise.withResolvers()
    status.cdAwaiter = promise
    const msHold = delayer.spd2hold('CastSpd', config.cooldownTotal)
    progressive(msHold, 33, progress => {
      status.cooldownCurrent = progress
      // console.log('>>', status.cooldownCurrent)
      if (status.cooldownCurrent >= 100) {
        status.cooldownCurrent = 0
        // console.log('откачен')
        resolve()
      }
      return true
    })
    return true
  }

  async stage5(config, target, state, delayer) {
    // console.log('stage5')
    return await new Promise(resolve => {
      const msHold = delayer.spd2hold('CastSpd', config.castSpeed)
      progressive(msHold, 33, progress => {
        state.castProgress = progress
        // console.log(state.castProgress)
        if (config.isRequiresTarget && target.distance > config.abortRange) {
          console.log('cast aborted')
          resolve(false)
          return false
        }
        if (state.castProgress >= 100) {
          state.castProgress = 0
          // console.log('cast completed')
          resolve(true)
        }
        return true
      })
    })
  }

  stage6(config, target, activities, ability) {
    // console.log('stage6')
    const activity = ability.createActivity()
    if (!config.isRequiresTarget) {
      activities.add(activity)
      return true
    }
    if (config.isRequiresTarget && target.hasTarget) {
      activity.attacker.social = activities.fight.social
      target.subject.activities.add(activity)
      return true
    }
    return false
  }
}
