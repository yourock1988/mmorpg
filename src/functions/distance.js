export default function distance(selfCoords, otherCoords) {
  const dx = selfCoords.x - otherCoords.x
  const dy = selfCoords.y - otherCoords.y
  return Math.hypot(dx, dy)
}
