export default class TrainedSkills {
  constructor() {
    this.sp = 0n
    this.active = []
    this.passive = []
  }

  trainActive(active) {
    this.sp -= active.cost
    this.active.push(active)
  }

  trainPassive(passive) {
    this.sp -= passive.cost
    this.passive.push(passive)
  }
}
