import abilityFabric from '../../../../src/abstract-fabric/abilities/abilityFabric.js'
import Cast from '../../../../src/classes/character/Cast.js'

function работоспособность_откатов() {
  const ability = abilityFabric('buff', 'Heart Of Lion', 1n)
  const cast = new Cast({})
  const { config, status } = ability
  if (config.cooldownTotal === 0) return
  cast.stage35(config, status)
  let oldCooldownCurrent = status.cooldownCurrent
  const intervalId = setInterval(() => {
    console.assert(status.cooldownCurrent < oldCooldownCurrent)
    oldCooldownCurrent = status.cooldownCurrent
    if (status.cooldownCurrent === 0) clearInterval(intervalId)
  }, 100)
}

работоспособность_откатов()
