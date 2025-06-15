import ds from '../dicts/defaultStats.js'
import { addPerc } from './utils.js'

const calc = (k, sb, l, v = 10) => addPerc(ds[k] * (sb / 100), (l - 1) * v)

export default function calcStatsCombat2(statsBasic, lvl) {
  return {
    hpTotal: calc('hpTotal', statsBasic.CON, lvl),
    hpRegen: calc('hpRegen', statsBasic.CON, lvl),
    mpTotal: calc('mpTotal', statsBasic.MEN, lvl),
    mpRegen: calc('mpRegen', statsBasic.MEN, lvl),
    PAtk: calc('PAtk', statsBasic.STR, lvl),
    PDef: calc('PDef', statsBasic.CON, lvl),
    Accuracy: calc('Accuracy', statsBasic.DEX, lvl, 5),
    CritRate: calc('CritRate', statsBasic.STR, lvl, 2),
    AtkSpd: calc('AtkSpd', statsBasic.DEX, lvl, 1),
    MAtk: calc('MAtk', statsBasic.INT, lvl),
    MDef: calc('MDef', statsBasic.MEN, lvl),
    Evasion: calc('Evasion', statsBasic.DEX, lvl, 5),
    Speed: calc('Speed', statsBasic.DEX, lvl, 1),
    CastSpd: calc('CastSpd', statsBasic.WIT, lvl, 1),
  }
}
