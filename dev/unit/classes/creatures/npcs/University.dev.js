import Player from '../../../../../src/classes/creatures/Player.js'
import University from '../../../../../src/classes/creatures/npcs/University.js'

function доступные_для_смены_профессии() {
  const character = new Player('Player', 'Orc', 'Fighter')
  const university = new University()
  university.selectCounterparty(character)

  console.assert(character.prof === 'OrcFighter')
  console.assert(university.availableProfessions.includes('Raider'))
  console.assert(university.availableProfessions.includes('Monk'))

  character.destroy()
  university.destroy()
}

function смена_професии_на_доступную() {
  const character = new Player('Player', 'Orc', 'Fighter')
  const university = new University()
  university.selectCounterparty(character)

  university.qualifyProfession('Raider')

  console.assert(character.prof === 'Raider')

  character.destroy()
  university.destroy()
}

function смена_професии_на_НЕдоступную_вызывает_ошибку() {
  const character = new Player('Player', 'Orc', 'Fighter')
  const university = new University()
  university.selectCounterparty(character)

  university.qualifyProfession('Wizard')

  console.log(character.prof)

  character.destroy()
  university.destroy()
}

доступные_для_смены_профессии()
смена_професии_на_доступную()
// смена_професии_на_НЕдоступную_вызывает_ошибку()
