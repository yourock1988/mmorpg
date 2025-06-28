export default class Delayer {
  constructor(statsCombat) {
    this.statsCombat = statsCombat
  }

  spd2hold(statProp, spd) {
    const avg = (this.statsCombat.current[statProp] + spd) / 2
    return Math.trunc(100000 / avg)
  }
}
