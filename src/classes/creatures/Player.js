import Character from '../character/Character.js'

export default class Player extends Character {
  constructor(nick, race, kind) {
    super({ race, kind })
    this.type = 'player'
    this.nick = nick
    this.race = race
    this.kind = kind
    this.prof = race + kind
    this.partyId = 0n
    this.clanId = 0n
    this.money = 0n
  }
}
