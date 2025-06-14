import calcStatsCombat2 from '../../functions/calcStatsCombat2.js'

export default class StatsCombat2 {
  constructor(statsBasic, leveler, wear, activities) {
    this.statsBasic = statsBasic
    this.leveler = leveler
    this.wear = wear
    this.activities = activities
  }

  get current() {
    const {
      statsBasic,
      leveler: { lvl },
      wear: { stats },
      activities,
    } = this
    const statsCombat = calcStatsCombat2(statsBasic, Number(lvl))
    Object.entries(stats).forEach(([key, value]) => (statsCombat[key] += value))
    activities.enforces.forEach(e => e.toCombat?.(statsCombat))
    return statsCombat
  }
}
