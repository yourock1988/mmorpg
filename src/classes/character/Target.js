export default class Target {
  constructor() {
    this.value = null
    this.type = ''
    this.hasTarget = false
  }

  set(target) {
    this.value = target
    this.type = target.type
    this.hasTarget = true
  }

  cancel() {
    this.value = null
    this.type = ''
    this.hasTarget = false
  }
}
