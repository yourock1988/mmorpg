import nextProfessions from '../functions/nextProfessions.js'

export default class University {
  constructor(character) {
    this.character = character
  }

  get availableProfessions() {
    return nextProfessions(this.character.prof)
  }

  changeProfession(profession) {
    if (this.availableProfessions.includes(profession)) {
      this.character.prof = profession
    }
  }
}
