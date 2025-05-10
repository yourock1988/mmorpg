import BootcampAbilities from '../../../src/classes/BootcampAbilities.js'
import Character from '../../../src/classes/character/Character.js'
import viewCharacter from '../../../src/functions/viewCharacter.js'

const character = new Character('Player1', 'Orc', 'Fighter', 'Raider')
const bootcampAbilities = new BootcampAbilities(character)
character.sp += 300n
viewCharacter(character)

bootcampAbilities.train('Defensive Aura', 1n)

viewCharacter(character)
console.log(character.abilities.list)
