import Player from '../../classes/creatures/Player.js'

export default class PlayerModel extends Player {
  ready(data) {
    console.log(data)
  }

  updateNick(nick) {
    // player id this.id updating nick from this.nick to nick
    this.nick = nick
    // player id this.id updated nick from this.nick to nick
  }

  updateWaypoint(point) {
    // player id this.id updating waypoint from this.waypoint.coords to point
    this.waypoint.changeDirection(point).then(res => {
      if (res) this.ready('player touched waypoint')
      else this.ready('player canceled waypoint')
    })
    // player id this.id updated waypoint from this.waypoint.coords to point
  }
}
