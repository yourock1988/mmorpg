import Fake from '../Fake.js'
import fakesList from '../lists/fakesList.js'

export default function fakeFabric(caption, count) {
  const findedItem = fakesList.find(e => e.caption === caption)
  if (!findedItem) throw new Error(`wrong fake`)
  const item = Object.assign({}, findedItem, { count })
  return new Fake(item)
}
