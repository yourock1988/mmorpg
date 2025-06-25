export default function calcIsHit(attackerStatsCombat, defenderStatsCombat) {
  const { accuracy } = attackerStatsCombat.current
  const { evasion } = defenderStatsCombat.current
  let diff = accuracy - evasion
  let ratio = Math.log10(Math.abs(diff) || 1) / 3
  let rand = Math.random() - 0.5
  ratio *= diff < -1 ? -1 : 1
  return true //! rand < ratio
}
