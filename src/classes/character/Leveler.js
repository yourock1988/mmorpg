import logBigInt from '../../functions/logBigInt.js'
import EventEmitter from 'node:events'

export default class Leveler extends EventEmitter {
  constructor() {
    super()
    this.exp = 1n // не может быть меньше 1n
    this.algBase = 3n
  }

  get lvl() {
    return logBigInt(this.exp, this.algBase) + 1n
  }

  get prevLvlExp() {
    return this.algBase ** (this.lvl - 1n) - 1n
  }

  get nextLvlExp() {
    return this.algBase ** this.lvl
  }

  get progress() {
    return +(
      Number(
        ((this.exp - this.prevLvlExp - 1n) * 10000n) /
          (this.nextLvlExp - this.prevLvlExp)
      ) / 100
    ).toFixed(2)
  }

  receiveExp(exp) {
    let oldLvl = this.lvl
    this.exp += exp
    if (this.exp <= 0n) this.exp = 1n
    if (this.lvl !== oldLvl) this.emit('update:lvl', this.lvl)
  }

  forceLevelUp() {
    const expToNextLvl = this.nextLvlExp - this.exp
    this.receiveExp(expToNextLvl)
  }

  forceLevelDown() {
    const expToPrevLvl = this.prevLvlExp - this.exp
    this.receiveExp(expToPrevLvl)
  }

  forceSetLevel(newLevel) {
    const exp = this.algBase ** (newLevel - 1n) - this.algBase ** this.lvl
    const expToNextLvl = this.nextLvlExp - this.exp
    this.receiveExp(expToNextLvl + exp)
  }
}
