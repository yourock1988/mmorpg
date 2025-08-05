import Bootcamp from '../../../src/classes/Bootcamp.js'
import Character from '../../../src/classes/character/Character.js'
import University from '../../../src/classes/University.js'

const character = new Character('Player', 'Orc', 'Fighter')
const university = new University(character)
const bootcamp = new Bootcamp(character)

university.changeProfession('Raider')
university.changeProfession('Destroyer')
character.leveler.forceSetLevel(45n)

console.assert(bootcamp.availableAbilities.length === 5)

// bootcamp.selectAbility('Noob Blessing', 1n)

character.destroy()
