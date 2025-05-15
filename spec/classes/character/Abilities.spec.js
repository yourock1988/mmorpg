import BootcampPersists from '../../../src/bootcamps/BootcampPersists.js'
import Character from '../../../src/classes/character/Character.js'
import viewCharacter from '../../../src/functions/viewCharacter.js'

const character = new Character('Player1', 'Orc', 'Fighter', 'Raider')
const bootcampPersists = new BootcampPersists(character)
character.sp += 300n
viewCharacter(character)

bootcampPersists.train('Defensive Aura', 1n)

viewCharacter(character)
console.log(character.abilities.list)
