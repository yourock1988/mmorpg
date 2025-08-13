import nextProfessions from '../../../functions/nextProfessions.js'
import Npc from '../Npc.js'

export default class University extends Npc {
  constructor() {
    super({ title: 'University' })
    this.npc = 'university'
  }

  get availableProfessions() {
    return nextProfessions(this.target.subject.prof)
  }

  qualifyProfession(profession) {
    if (this.availableProfessions.includes(profession)) {
      this.target.subject.prof = profession
    }
  }
}
