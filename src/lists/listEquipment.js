import Equipment from '../classes/Equipment.js'
import takePercent from '../functions/takePercent.js'

export default [
  new Equipment('Axe Of Glory', { PAtk: 42n, AtkSpd: 11n }, 'weapon'),
  new Equipment('Blade Of Blood', { PAtk: 33n }, 'weapon'),
  new Equipment(
    'Helmet Of Truth',
    { PDef: 33n },
    'helmet',
    health => (health.protoTotal += takePercent(10n)(health.protoTotal))
  ),
  new Equipment(
    'Gloves Of Killer',
    { PDef: 22n },
    'gloves',
    null,
    mana => (mana.protoTotal += takePercent(10n)(mana.protoTotal))
  ),
]
