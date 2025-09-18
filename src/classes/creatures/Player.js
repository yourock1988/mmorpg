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
    this.init()
  }

  init() {
    this.transferEvent(this.health, 'CL.PLAYER.DIED')
    this.transferEvent(this.coords, 'CL.PLAYER.STEP')
    this.transferEvent(this.coords, 'CL.PLAYER.TELEPORTED')
  }

  teleportToPoint(point) {
    this.target.cancel()
    this.coords.teleportTo(point)
  }

  walkToPoint(point) {
    this.waypoint.changeDirection(point)
  }

  selectTarget(target) {
    if (this.target.subject === target) this.fight.autoAttack()
    else this.target.set(target)
  }
}
