import statsBasic from '../../../src/dicts/statsBasic2.js'
import calcStatsCombat2 from '../../../src/functions/calcStatsCombat2.js'

let statsCombat = { ...statsBasic.Orc.Fighter }

statsCombat = calcStatsCombat2(statsCombat, 1)
// console.log(statsCombat)

// statsCombat = calcStatsCombat2(statsCombat, 2)
// console.log(statsCombat)

// statsCombat = calcStatsCombat2(statsCombat, 10)
// console.log(statsCombat)

// statsCombat = calcStatsCombat2(statsCombat, 40)
// console.log(statsCombat)

// statsCombat = calcStatsCombat2(statsCombat, 80)
// console.log(statsCombat)
