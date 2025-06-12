import Coords from '../../../../src/classes/character/Coords.js'
import distance from '../../../../src/functions/distance.js'

function мгновенная_телепортация() {
  const coords = new Coords()
  coords.teleportTo({ x: -1, y: 1 })
  console.assert(coords.x === -1 && coords.y === 1)
}
function вычесленние_дистанции() {
  const coords = new Coords()
  coords.teleportTo({ x: -1, y: 1 })
  const distance = coords.getDistanceTo({ x: 1, y: -1 })
  console.assert(distance === 2.83)
}
async function шаг_в_направлении() {
  const coords = new Coords()
  coords.teleportTo({ x: 20, y: -10 })
  await coords.stepTo({ x: -10, y: 20 })
  console.assert(coords.x < 20 && coords.y > -10)
}
async function хотьба_в_направлении_неподвижной_цели() {
  const coords = new Coords()
  const targetCoords = { x: 20, y: -10 }
  await coords.moveTo(targetCoords)
  console.assert(distance(coords, targetCoords) < 1)
}
async function хотьба_в_направлении_движущейся_цели() {
  const coords = new Coords()
  const targetCoords = { x: 20, y: -10 }
  let intervalId = setInterval(() => {
    targetCoords.x += 0.3
    targetCoords.y -= 0.6
    // console.log(targetCoords.x, targetCoords.y)
  }, 300)
  await coords.moveTo(targetCoords)
  clearInterval(intervalId)
  console.assert(distance(coords, targetCoords) < 1)
}
async function прерывание_хотьбы_в_направлении_неподвижной_цели() {
  const coords = new Coords()
  const targetCoords = { x: 20, y: -10 }
  const interrupt = { break: false }
  setTimeout(() => (interrupt.break = true), 1000)
  await coords.moveTo(targetCoords, interrupt)
  console.assert(distance(coords, targetCoords) > 1)
}
async function переключение_целей_при_хотьбе() {
  const coords = new Coords()
  const targets = [
    { x: 15, y: -15 },
    { x: -15, y: 15 },
    { x: -15, y: -15 },
    { x: 15, y: 15 },
  ]
  coords.moveTo(targets.pop())
  const intervalId = setInterval(() => {
    // console.log(coords)
    if (targets.length === 0) {
      clearInterval(intervalId)
      coords.stop()
      console.assert(coords.x > -1 && coords.y < 1)
      return
    }
    coords.moveTo(targets.pop())
  }, 1500)
}

мгновенная_телепортация()
вычесленние_дистанции()
шаг_в_направлении()
хотьба_в_направлении_неподвижной_цели()
хотьба_в_направлении_движущейся_цели()
прерывание_хотьбы_в_направлении_неподвижной_цели()
переключение_целей_при_хотьбе()
