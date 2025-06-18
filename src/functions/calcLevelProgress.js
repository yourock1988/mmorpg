export default function calcLevelProgress(exp, prevExp, nextExp) {
  return Number(((exp - prevExp - 1n) * 10000n) / (nextExp - prevExp)) / 100
}
