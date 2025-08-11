import Character from '../character/Character.js'

export default class Npc extends Character {
  constructor({ title }) {
    super({ race: 'x', kind: 'x' })
    this.type = 'npc'
    this.title = title
  }
}
