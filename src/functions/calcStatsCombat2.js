import ds from '../dicts/defaultStats.js'

const round = n => +n.toFixed(2)
const perc = (n, p) => (n / 100) * p
const addPerc = (n, p) => round(n + perc(n, p))
const calc1 = (k, sb, l, v = 10) => addPerc(ds[k] * (sb / 100), (l - 1) * v)

export default function calcStatsCombat2(statsBasic, lvl) {
  return {
    hpTotal: calc1('hpTotal', statsBasic.CON, lvl),
    hpRegen: calc1('hpRegen', statsBasic.CON, lvl),
    mpTotal: calc1('mpTotal', statsBasic.MEN, lvl),
    mpRegen: calc1('mpRegen', statsBasic.MEN, lvl),
    PAtk: calc1('PAtk', statsBasic.STR, lvl),
    PDef: calc1('PDef', statsBasic.CON, lvl),
    Accuracy: calc1('Accuracy', statsBasic.DEX, lvl, 5),
    CritRate: calc1('CritRate', statsBasic.STR, lvl, 2),
    AtkSpd: calc1('AtkSpd', statsBasic.DEX, lvl, 1),
    MAtk: calc1('MAtk', statsBasic.INT, lvl),
    MDef: calc1('MDef', statsBasic.MEN, lvl),
    Evasion: calc1('Evasion', statsBasic.DEX, lvl, 5),
    Speed: calc1('Speed', statsBasic.DEX, lvl, 1),
    CastSpd: calc1('CastSpd', statsBasic.WIT, lvl, 1),
  }
}
