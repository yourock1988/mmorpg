import Bootcamp from '../../../../../src/classes/creatures/npcs/Bootcamp.js'
import University from '../../../../../src/classes/creatures/npcs/University.js'
import Player from '../../../../../src/classes/creatures/Player.js'

async function methodName() {
  const character = new Player('Player', 'Orc', 'Fighter')
  const university = new University()
  const bootcamp = new Bootcamp()
  bootcamp.selectCounterparty(character)
  university.selectCounterparty(character)

  character.social.receiveSp(9999n)
  character.leveler.forceSetLevel(20n)
  // console.log(bootcamp.availableAbilities)
  university.qualifyProfession('Raider')
  // console.log(bootcamp.availableAbilities)
  university.qualifyProfession('Destroyer')
  await bootcamp.selectAbility('Quick Step', 1n)
  // console.log(bootcamp.availableAbilities)

  // console.assert(bootcamp.availableAbilities.length === 5)
  // bootcamp.selectAbility('Noob Blessing', 1n)

  character.destroy()
  bootcamp.destroy()
  university.destroy()
}

methodName()
