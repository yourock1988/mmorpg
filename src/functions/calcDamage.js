export default function calcDamage(PAtk, PDef) {
  const k = Number(PAtk) / Number(PDef)
  let d = BigInt(Math.trunc(Number(PAtk) * k))
  return d > 0n ? d : 1n
}
