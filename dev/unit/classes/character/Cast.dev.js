import abilityFabric from '../../../../src/abstract-fabric/abilities/abilityFabric.js'
import Activities from '../../../../src/classes/character/Activities.js'
import Cast from '../../../../src/classes/character/Cast.js'
import Leveler from '../../../../src/classes/character/Leveler.js'
import StatsCombat from '../../../../src/classes/character/StatsCombat.js'
import Wear from '../../../../src/classes/character/Wear.js'
import Delayer from '../../../../src/classes/Delayer.js'
import statsBasic from '../../../../src/dicts/statsBasic.js'

function работоспособность_откатов() {
  const sb = { ...statsBasic.Orc.Fighter }
  const leveler = new Leveler()
  const activities = new Activities()
  const wear = new Wear(activities)
  const statsCombat = new StatsCombat(sb, leveler, wear, activities)
  const delayer = new Delayer(statsCombat)
  const ability = abilityFabric('buff', 'Heart Of Lion', 1n)
  const cast = new Cast({})
  const { config, status } = ability
  if (config.cooldownTotal === 0) return
  cast.stage4(config, status, delayer)
  let oldCooldownCurrent = status.cooldownCurrent
  const intervalId = setInterval(() => {
    if (status.cooldownCurrent === 0) return clearInterval(intervalId)
    console.assert(status.cooldownCurrent > oldCooldownCurrent)
    oldCooldownCurrent = status.cooldownCurrent
  }, 100)
}

работоспособность_откатов()
