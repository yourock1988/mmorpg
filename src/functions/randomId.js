export default function () {
  return Math.trunc(Math.random() * 0xff ** 4)
    .toString(16)
    .padStart(8, '0')
}
