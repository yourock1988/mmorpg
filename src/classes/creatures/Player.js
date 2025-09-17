import EventEmitterAdapter from '../../../public/EventEmitterAdapter.js'
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
    this.health.on('CL.PLAYER.DIED', () => this.emit('CL_PLAYER_DIED'))
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
