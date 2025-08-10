import Character from '../character/Character.js'

export default class Npc extends Character {
  constructor(title) {
    super()
    this.type = 'npc'
    this.title = title
  }
}
