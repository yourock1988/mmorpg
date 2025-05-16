import itemFabric from '../../../src/abstract-fabric/items/fabrics/itemFabric.js'
import Item from '../../../src/abstract-fabric/items/Item.js'
import Cargo from '../../../src/classes/character/Cargo.js'

function добавление_итемов_и_группировка_итемов() {
  const cargo = new Cargo()
  cargo.addItem(itemFabric('Bone'))
  cargo.addItem(itemFabric('Bone'))
  cargo.addItem(itemFabric('Powder'))
  cargo.addItem(itemFabric('Skel'))
  cargo.addItem(itemFabric('Skel'))
  console.assert(cargo.items.length === 5 && cargo.groupedItems.length === 4)
}
function удаление_несгрупированного_итема() {
  const cargo = new Cargo()
  cargo.addItem(itemFabric('Bone'))
  cargo.addItem(itemFabric('Bone'))
  cargo.addItem(itemFabric('Powder'))
  cargo.addItem(itemFabric('Skel'))
  cargo.addItem(itemFabric('Skel'))
  const idToRemove = cargo.groupedItems.at(-1)[0].id
  cargo.removeItemById(idToRemove)
  console.assert(cargo.items.length === 4 && cargo.groupedItems.length === 3)
}
function удаление_сгрупированного_итема() {
  const cargo = new Cargo()
  cargo.addItem(itemFabric('Bone'))
  cargo.addItem(itemFabric('Bone'))
  cargo.addItem(itemFabric('Powder'))
  cargo.addItem(itemFabric('Skel'))
  cargo.addItem(itemFabric('Skel'))
  const idToRemove = cargo.groupedItems.at(0)[0].id
  console.log(cargo.groupedItems[0][0].caption)
  // ПИЗДАНУТАЯ ХУЕТА: группирует в разном порядке
  // console.log(cargo.items.map(i => i.caption))
  cargo.removeItemById(idToRemove)
  // console.log(cargo.items.map(i => i.caption))
  console.assert(cargo.items.length === 4 && cargo.groupedItems.length === 4)
}
function добавление_клонов_итемов_выбрасывает_ошибку() {
  const cargo = new Cargo()
  let item = itemFabric('Powder')
  cargo.addItem(item)
  cargo.addItem(item)
}

добавление_итемов_и_группировка_итемов()
удаление_несгрупированного_итема()
добавление_итемов_и_группировка_итемов()

// удаление_сгрупированного_итема()
// добавление_клонов_итемов_выбрасывает_ошибку()
