export default class Ability {
  constructor() {
    this.activity = new Activity()
  }

  castToTarget(target) {
    target.debuffs.push(this.activity)
  }
}
