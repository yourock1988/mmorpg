import Character from '../../../src/classes/character/Character.js'
import University from '../../../src/classes/University.js'

function доступные_для_смены_профессии() {
  const character = new Character('Player', 'Orc', 'Fighter')
  const university = new University(character)

  console.assert(character.prof === 'OrcFighter')
  console.assert(university.availableProfs.includes('Raider'))
  console.assert(university.availableProfs.includes('Monk'))

  character.destroy()
}

function смена_професии_на_доступную() {
  const character = new Character('Player', 'Orc', 'Fighter')
  const university = new University(character)

  university.changeProfession('Raider')

  console.assert(character.prof === 'Raider')

  character.destroy()
}

function смена_професии_на_НЕдоступную_вызывает_ошибку() {
  const character = new Character('Player', 'Orc', 'Fighter')
  const university = new University(character)

  university.changeProfession('Wizard')

  console.log(character.prof)

  character.destroy()
}

доступные_для_смены_профессии()
смена_професии_на_доступную()
// смена_професии_на_НЕдоступную_вызывает_ошибку()
