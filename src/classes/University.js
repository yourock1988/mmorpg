import profHierarhy from '../dicts/profHierarhy.js'
import govnofunc from '../functions/govnofunc.js'

export default class University {
  constructor(character) {
    this.character = character
  }

  get availableProfs() {
    return govnofunc(profHierarhy, this.character.prof)
  }

  changeProfession(profession) {
    if (this.availableProfs.includes(profession)) {
      this.character.prof = profession
    } else {
      throw new Error(`профессия ${profession} недоступна`)
    }
  }
}
