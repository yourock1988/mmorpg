import logBigInt from './logBigInt.js'

const calc = (sb, c, l, se) => sb * c * l + se

// console.log(calc(1n, 2n, 3n, 4n))

function calcStatsCombat(statsBasic, lvl, statsEquip) {
  return {
    PAtk: calc(statsBasic.STR, 1n, lvl, statsEquip.PAtk ?? 0n),
    PDef: calc(statsBasic.CON, 2n, lvl, statsEquip.PDef ?? 0n),
    Accuracy: calc(statsBasic.DEX, 2n, lvl, statsEquip.Accuracy ?? 0n),
    CritRate: calc(statsBasic.STR, 2n, lvl, statsEquip.CritRate ?? 0n),
    AtkSpd: calc(statsBasic.DEX, 3n, lvl, statsEquip.AtkSpd ?? 0n),
    MAtk: calc(statsBasic.INT, 2n, lvl, statsEquip.MAtk ?? 0n),
    MDef: calc(statsBasic.MEN, 3n, lvl, statsEquip.MDef ?? 0n),
    Evasion: calc(statsBasic.DEX, 3n, lvl, statsEquip.Evasion ?? 0n),
    Speed: calc(statsBasic.DEX, 3n, lvl, statsEquip.Speed ?? 0n),
    CastSpd: calc(statsBasic.WIT, 3n, lvl, statsEquip.CastSpd ?? 0n),
  }
}

export default calcStatsCombat
