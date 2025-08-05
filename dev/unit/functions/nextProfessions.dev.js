import nextProfessions from '../../../src/functions/nextProfessions.js'

let list = nextProfessions('Rogue')

console.assert(JSON.stringify(list) === '["TreasureHunter","Hawkeye"]')
