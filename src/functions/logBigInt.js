export default function (n, base) {
  if (n <= 0n) throw new Error('Логарифм не определён для неположительных')
  let k = 0n
  let power = 1n
  while (n >= power) {
    power *= base
    k++
  }
  return k - 1n
}
