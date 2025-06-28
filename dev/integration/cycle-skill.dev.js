import abilityFabric from '../../src/abstract-fabric/abilities/abilityFabric.js'
import Character from '../../src/classes/character/Character.js'

async function наносит_ли_скилл_урон() {
  const Player1 = new Character('Player1', 'Orc', 'Fighter')
  const Player2 = new Character('Player2', 'Orc', 'Fighter')
  const skill = abilityFabric('skill', 'Iron Punch', 1n)
  const oldHealthCurrent = Player2.health.current
  Player1.target.set(Player2)

  await Player1.abilities.cast(skill)

  console.assert(Player2.health.current < oldHealthCurrent)

  Player1.social.destroy()
  Player2.social.destroy()
  Player1.activities.removeAll()
  Player2.activities.removeAll()
}

async function можно_ли_убить_скиллом() {
  const Player1 = new Character('Player1', 'Orc', 'Fighter')
  const Player2 = new Character('Player2', 'Orc', 'Fighter')
  const skill = abilityFabric('skill', 'Iron Punch', 1n)
  Player1.target.set(Player2)

  await Player1.abilities.cast(skill)
  await skill.status.cdAwaiter
  await Player1.abilities.cast(skill)
  await skill.status.cdAwaiter
  await Player1.abilities.cast(skill)
  await skill.status.cdAwaiter
  await Player1.abilities.cast(skill)

  console.assert(Player1.mana.current === 252)
  console.assert(Player2.health.current === 0)
  console.assert(Player1.social.isModePvE === false)
  console.assert(Player1.social.isModePvP === true)
  console.assert(Player1.social.isModePK === true)
  console.assert(Player1.social.karma === 1000n)
  console.assert(Player1.leveler.exp === 431n)
  console.assert(Player1.leveler.lvl === 6n)

  Player1.social.destroy()
  Player2.social.destroy()
  Player1.activities.removeAll()
  Player2.activities.removeAll()
}

наносит_ли_скилл_урон()
можно_ли_убить_скиллом()
