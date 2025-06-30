import itemFabric from '../../../../src/abstract-fabric/items/itemFabric.js'
import Cargo from '../../../../src/classes/character/Cargo.js'

function добавление_итемов_и_группировка_итемов() {
  const cargo = new Cargo()
  cargo.addItem(itemFabric('piece', 'Bone'))
  cargo.addItem(itemFabric('piece', 'Bone'))
  cargo.addItem(itemFabric('piece', 'Powder'))
  cargo.addItem(itemFabric('equipment', 'Axe Of Glory'))
  cargo.addItem(itemFabric('equipment', 'Axe Of Glory'))

  console.assert(cargo.items.length === 5 && cargo.groupedItems.length === 4)
}
function удаление_несгруппированного_итема() {
  const cargo = new Cargo()
  cargo.addItem(itemFabric('piece', 'Bone'))
  cargo.addItem(itemFabric('piece', 'Bone'))
  cargo.addItem(itemFabric('piece', 'Powder'))
  cargo.addItem(itemFabric('equipment', 'Axe Of Glory'))
  cargo.addItem(itemFabric('equipment', 'Axe Of Glory'))
  const idToRemove = cargo.groupedItems.at(-1)[0].id

  cargo.removeItemById(idToRemove)

  console.assert(cargo.items.length === 4 && cargo.groupedItems.length === 3)
}
function удаление_сгруппированного_итема() {
  const cargo = new Cargo()
  cargo.addItem(itemFabric('piece', 'Bone'))
  cargo.addItem(itemFabric('piece', 'Bone'))
  cargo.addItem(itemFabric('piece', 'Powder'))
  cargo.addItem(itemFabric('equipment', 'Axe Of Glory'))
  cargo.addItem(itemFabric('equipment', 'Axe Of Glory'))
  const idToRemove = cargo.groupedItems.at(0)[0].id

  cargo.removeItemById(idToRemove)

  console.assert(cargo.items.length === 4 && cargo.groupedItems.length === 4)
}
function добавление_клонов_итемов_выбрасывает_ошибку() {
  const cargo = new Cargo()
  let item = itemFabric('piece', 'Powder')
  cargo.addItem(item)
  cargo.addItem(item)
}

добавление_итемов_и_группировка_итемов()
удаление_несгруппированного_итема()
удаление_сгруппированного_итема()

// добавление_клонов_итемов_выбрасывает_ошибку()
