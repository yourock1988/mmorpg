import Coords from './Coords.js'

export default class CoordsObservable extends Coords {
  async stepTo(coords) {
    console.log('before coords')
    const x = await super.stepTo(coords)
    console.log('after coords')
    return x
  }
}
