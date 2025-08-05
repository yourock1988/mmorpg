import prevProfessions from '../../../src/functions/prevProfessions.js'

let list = prevProfessions('Sagittarius')

console.assert(
  JSON.stringify(list) === '["Sagittarius","Hawkeye","Rogue","HumanFighter"]'
)
