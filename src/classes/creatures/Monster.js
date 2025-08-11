import Character from '../character/Character.js'

export default class Monster extends Character {
  constructor({ pseudonym }) {
    super({ race: 'x', kind: 'x' })
    this.pseudonym = pseudonym
  }
}
