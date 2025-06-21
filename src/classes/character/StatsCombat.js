import calcStatsCombat from '../../functions/calcStatsCombat.js'

export default class StatsCombat {
  constructor(statsBasic, leveler, wear, activities) {
    this.statsBasic = statsBasic
    this.leveler = leveler
    this.wear = wear
    this.activities = activities
    this.init()
  }

  init() {
    this.activities.statsCombat = this
  }

  get current() {
    const {
      statsBasic,
      leveler: { lvl },
      wear: { stats },
      activities,
    } = this
    const statsCombat = calcStatsCombat(statsBasic, Number(lvl))
    Object.entries(stats).forEach(([key, value]) => (statsCombat[key] += value))
    activities.enforces.forEach(e => e.toStatsCombat?.(statsCombat))
    return statsCombat
  }
}
