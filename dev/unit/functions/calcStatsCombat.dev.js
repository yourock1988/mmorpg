import statsBasic from '../../../src/dicts/statsBasic.js'
import calcStatsCombat from '../../../src/functions/calcStatsCombat.js'

let statsCombat = { ...statsBasic.Orc.Fighter }

statsCombat = calcStatsCombat(statsCombat, 1)
// console.log(statsCombat)

// statsCombat = calcStatsCombat(statsCombat, 2)
// console.log(statsCombat)

// statsCombat = calcStatsCombat(statsCombat, 10)
// console.log(statsCombat)

// statsCombat = calcStatsCombat(statsCombat, 40)
// console.log(statsCombat)

// statsCombat = calcStatsCombat(statsCombat, 80)
// console.log(statsCombat)
