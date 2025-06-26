import calcDistance from './calcDistance.js'

export default function calcStep(selfCoords, otherCoords, speed) {
  const hyp = calcDistance(selfCoords, otherCoords)
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
