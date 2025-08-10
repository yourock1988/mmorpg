import Character from '../../classes/character/Character.js'

export default class CharacterAggregateRoot extends Character {
  selectTarget(subject) {
    this.target.set(subject)
  }

  cancelTarget() {
    this.target.cancel()
  }

  async move() {
    if (this.target.social.isModePK) await this.fight.autoAttack()
    else await this.target.goto()
  }
}
