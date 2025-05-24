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
}
async function прерывание_хотьбы_к_цели() {
  const anotherCharacter = new Character('Player1', 'Orc', 'Fighter')
  const coords = new Coords()
  const target = new Target(coords)
  target.set(anotherCharacter)
  setTimeout(() => target.cancel(), 300)

  let res = await target.goto()

  console.assert(res === false)
}
async function прерывание_хотьбы_при_установке_другой_цели() {
  const anotherCharacter = new Character('Player1', 'Orc', 'Fighter')
  const anotherCharacter2 = new Character('Player2', 'Orc', 'Fighter')
  const coords = new Coords()
  const target = new Target(coords)
  target.set(anotherCharacter)
  setTimeout(() => target.set(anotherCharacter2), 300)

  let res = await target.goto()

  console.assert(res === false)
}
function правильно_ли_вычисляется_дистанция() {
  const anotherCharacter = new Character('Player1', 'Orc', 'Fighter')
  const coords = new Coords()
  const target = new Target(coords)
  target.set(anotherCharacter)

  anotherCharacter.coords.teleportTo({ x: 1, y: -1 })
  coords.teleportTo({ x: -1, y: 1 })

  console.assert(target.distance.toFixed(2) === '2.83')
}

хотьба_к_цели()
прерывание_хотьбы_к_цели()
прерывание_хотьбы_при_установке_другой_цели()
правильно_ли_вычисляется_дистанция()
