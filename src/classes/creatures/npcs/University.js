import nextProfessions from '../../../functions/nextProfessions.js'
import Npc from '../Npc.js'

export default class University extends Npc {
  constructor(character) {
    super({ title: 'University' })
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
