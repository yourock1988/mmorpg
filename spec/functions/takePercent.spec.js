import takePercent from '../../src/functions/takePercent.js'

console.assert(
  2n === takePercent(10n)(20n) &&
    5n === takePercent(10n)(55n) &&
    55n === takePercent(10n)(555n)
)
