import randomId from '../functions/randomId.js'

export default class Activity {
  constructor({ type, caption, level, enforce, duration, isSeen }) {
    this.id = randomId()
    this.type = type
    this.caption = caption
    this.level = level ?? 1n
    this.enforce = enforce ?? {
      toCombat(combat) {
        //
      },
      toHealth(health) {
        //
      },
      toMana(mana) {
        //
      },
    }
    this.duration = duration ?? 20 * 60
    this.isSeen = isSeen ?? true
  }
}
