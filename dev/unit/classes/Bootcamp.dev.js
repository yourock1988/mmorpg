import Bootcamp from '../../../src/classes/Bootcamp.js'
import Character from '../../../src/classes/character/Character.js'
import University from '../../../src/classes/University.js'

async function methodName() {
  const character = new Character('Player', 'Orc', 'Fighter')
  const university = new University(character)
  const bootcamp = new Bootcamp(character)

  character.social.receiveSp(9999n)
  character.leveler.forceSetLevel(20n)
  // console.log(bootcamp.availableAbilities)
  university.changeProfession('Raider')
  // console.log(bootcamp.availableAbilities)
  university.changeProfession('Destroyer')
  await bootcamp.selectAbility('Quick Step', 1n)
  // console.log(bootcamp.availableAbilities)

  // console.assert(bootcamp.availableAbilities.length === 5)
  // bootcamp.selectAbility('Noob Blessing', 1n)

  character.destroy()
}

methodName()
