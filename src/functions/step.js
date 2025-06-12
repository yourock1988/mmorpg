import distance from './distance.js'

export default function step(selfCoords, otherCoords, speed) {
  const hyp = distance(selfCoords, otherCoords)
  const dx = otherCoords.x - selfCoords.x
  const dy = otherCoords.y - selfCoords.y
  const cos = dx / hyp
  const sin = dy / hyp
  const v = speed * 0.01
  let x = selfCoords.x + cos * v
  let y = selfCoords.y + sin * v
  x = +x.toFixed(2)
  y = +y.toFixed(2)
  return { x, y }
}
