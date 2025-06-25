export default function calcDelayAttack(statsCombat) {
  return Math.trunc(100000 / statsCombat.current.AtkSpd)
}
