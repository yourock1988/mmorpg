const carryProgress = s => e => c => +(((c - s) / (e - s)) * 100).toFixed(1)
function getProgress(calcProgress) {
  const timestamp = Date.now()
  let progress = calcProgress(timestamp)
  if (progress >= 100) progress = 100
  return progress
}

export default function progressive(msHold, msFrequency, cb) {
  const timestampStart = Date.now()
  const timestampEnd = timestampStart + msHold
  const calcProgress = carryProgress(timestampStart)(timestampEnd)

  let intervalId = setInterval(() => {
    const progress = getProgress(calcProgress)
    if (!cb(progress) || progress === 100) clearInterval(intervalId)
  }, msFrequency)
}

// progressive(777, 33, x => (console.log(x), true))
