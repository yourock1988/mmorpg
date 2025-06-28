import abilityFabric from '../../src/abstract-fabric/abilities/abilityFabric.js'
import Character from '../../src/classes/character/Character.js'

async function наносит_ли_спелл_урон() {
  const Player1 = new Character('Player1', 'Orc', 'Fighter')
  const Player2 = new Character('Player2', 'Orc', 'Fighter')
  const skill = abilityFabric('spell', 'Hydro Blast', 1n)
  const oldHealthCurrent = Player2.health.current
  Player1.target.set(Player2)

  console.log(oldHealthCurrent)
  await Player1.abilities.cast(skill)
  console.log(Player2.health.current)
  await skill.status.cdAwaiter
  await Player1.abilities.cast(skill)
  console.log(Player2.health.current)
  console.assert(Player2.health.current === 0)
  // console.log(Player1.leveler.exp)
  // console.log(Player1.leveler.lvl)
  // console.assert(Player2.health.current < oldHealthCurrent)

  Player1.social.destroy()
  Player2.social.destroy()
  Player1.activities.removeAll()
  Player2.activities.removeAll()
}

наносит_ли_спелл_урон()
можно_ли_убить_спеллом()
