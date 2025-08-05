import calcIsHit from '../../../src/functions/calcIsHit.js'

let x
x = calcIsHit({ current: { accuracy: 55 } }, { current: { evasion: 50 } })
console.log(x)
