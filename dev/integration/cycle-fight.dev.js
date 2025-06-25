import Character from '../../src/classes/character/Character.js'

function проверка_sendDamage_pvp() {
  const Player1 = new Character('Player1', 'Orc', 'Fighter')
  const Player2 = new Character('Player1', 'Orc', 'Fighter')
  let oldHealthCurrent = Player2.health.current
  Player1.target.set(Player2)
  Player2.target.set(Player1)
  Player1.leveler.forceSetLevel(16n)
  Player2.fight.sendDamage()

  Player1.fight.sendDamage()
  // console.log(Player2.health.current)
  Player1.fight.sendDamage()
  // console.log(Player2.health.current)
  Player1.fight.sendDamage()
  // console.log(Player2.health.current)
  Player1.fight.sendDamage()
  // console.log(Player2.health.current)

  console.assert(Player1.social.pvp === 1n)
  console.assert(Player2.social.pvp === 0n)
  console.assert(Player1.social.pk === 0n)
  console.assert(Player2.social.pk === 0n)
  console.assert(Player1.social.isFighting === true)
  console.assert(Player2.social.isFighting === true)
  console.assert(Player1.social.isPlayerKiller === false)
  console.assert(Player2.social.isPlayerKiller === false)

  // console.log(Player1.social)
  // console.log(Player2.social)

  Player1.activities.removeAll()
  Player2.activities.removeAll()
}

async function проверка_attack_pvp() {
  const Player1 = new Character('Player1', 'Orc', 'Fighter')
  const Player2 = new Character('Player1', 'Orc', 'Fighter')
  let oldHealthCurrent = Player2.health.current
  Player1.target.set(Player2)
  Player2.target.set(Player1)
  Player1.leveler.forceSetLevel(16n)
  Player2.fight.sendDamage()

  // console.log(Player2.health.current)
  await Player1.fight.attack()
  // console.log(Player2.health.current)
  await Player1.fight.attack()
  // console.log(Player2.health.current)
  await Player1.fight.attack()
  // console.log(Player2.health.current)
  await Player1.fight.attack()
  // console.log(Player2.health.current)
  await Player1.fight.attack()
  // console.log(Player2.health.current)

  console.assert(Player1.social.pvp === 1n)
  console.assert(Player2.social.pvp === 0n)
  console.assert(Player1.social.pk === 0n)
  console.assert(Player2.social.pk === 0n)
  console.assert(Player1.social.isFighting === true)
  console.assert(Player2.social.isFighting === true)
  console.assert(Player1.social.isPlayerKiller === false)
  console.assert(Player2.social.isPlayerKiller === false)

  Player1.activities.removeAll()
  Player2.activities.removeAll()
}

async function проверка_autoAttack_pvp() {
  const Player1 = new Character('Player1', 'Orc', 'Fighter')
  const Player2 = new Character('Player1', 'Orc', 'Fighter')
  let oldHealthCurrent = Player2.health.current
  Player1.target.set(Player2)
  Player2.target.set(Player1)
  Player1.leveler.forceSetLevel(16n)
  Player2.fight.sendDamage()
  Player2.coords.teleportTo({ x: 15, y: 15 })

  // console.log(Player2.health.current)
  await Player1.fight.autoAttack()
  // console.log(Player2.health.current)

  console.assert(Player1.social.pvp === 1n)
  console.assert(Player2.social.pvp === 0n)
  console.assert(Player1.social.pk === 0n)
  console.assert(Player2.social.pk === 0n)
  console.assert(Player1.social.isFighting === true)
  console.assert(Player2.social.isFighting === true)
  console.assert(Player1.social.isPlayerKiller === false)
  console.assert(Player2.social.isPlayerKiller === false)

  Player1.activities.removeAll()
  Player2.activities.removeAll()
}

проверка_sendDamage_pvp()
проверка_attack_pvp()
проверка_autoAttack_pvp()
