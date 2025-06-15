export default function calcDamage(PAtk, PDef) {
  const k = Number(PAtk) / Number(PDef)
  let d = Math.trunc(Number(PAtk) * k)
  return d > 0 ? d : 1
}
