import Character from '../../../src/classes/character/Character.js'
import Coords from '../../../src/classes/character/Coords.js'
import Target from '../../../src/classes/character/Target.js'

async function хотьба_к_цели() {
  const anotherCharacter = new Character('Player1', 'Orc', 'Fighter')
  const coords = new Coords()
  const target = new Target(coords)
  target.set(anotherCharacter)

  let res = await target.goto()

  console.assert(res === true)

  anotherCharacter.social.destroy()
  anotherCharacter.activities.removeAll()
}
async function прерывание_хотьбы_к_цели() {
  const anotherCharacter = new Character('Player1', 'Orc', 'Fighter')
  const coords = new Coords()
  const target = new Target(coords)
  coords.teleportTo({ x: 15, y: 10 })
  target.set(anotherCharacter)
  setTimeout(() => target.cancel(), 500)

  let res = await target.goto()

  console.assert(res === false)

  anotherCharacter.social.destroy()
  anotherCharacter.activities.removeAll()
}
async function прерывание_хотьбы_при_установке_другой_цели() {
  const anotherCharacter = new Character('Player1', 'Orc', 'Fighter')
  const anotherCharacter2 = new Character('Player2', 'Orc', 'Fighter')
  const coords = new Coords()
  const target = new Target(coords)
  coords.teleportTo({ x: 15, y: 10 })
  target.set(anotherCharacter)
  setTimeout(() => target.set(anotherCharacter2), 500)

  let res = await target.goto()

  console.assert(res === false)

  anotherCharacter.social.destroy()
  anotherCharacter2.social.destroy()
  anotherCharacter.activities.removeAll()
  anotherCharacter2.activities.removeAll()
}
function правильно_ли_вычисляется_дистанция() {
  const anotherCharacter = new Character('Player1', 'Orc', 'Fighter')
  const coords = new Coords()
  const target = new Target(coords)
  target.set(anotherCharacter)

  anotherCharacter.coords.teleportTo({ x: 1, y: -1 })
  coords.teleportTo({ x: -1, y: 1 })

  console.assert(target.distance.toFixed(2) === '2.83')

  anotherCharacter.social.destroy()
  anotherCharacter.activities.removeAll()
}

хотьба_к_цели()
прерывание_хотьбы_к_цели()
прерывание_хотьбы_при_установке_другой_цели()
правильно_ли_вычисляется_дистанция()
