import consumableFabric from '../../../../src/abstract-fabric/items/fabrics/consumableFabric.js'
import equipmentFabric from '../../../../src/abstract-fabric/items/fabrics/equipmentFabric.js'
import fakeFabric from '../../../../src/abstract-fabric/items/fabrics/fakeFabric.js'
import itemFabric from '../../../../src/abstract-fabric/items/fabrics/itemFabric.js'
import Activities from '../../../../src/classes/character/Activities.js'
import Cargo from '../../../../src/classes/character/Cargo.js'

function выброс_фейк_предмета() {
  const activities = new Activities()
  const cargo = new Cargo(activities)
  cargo.addItem(itemFabric('equipment', 'Axe Of Glory'))
  cargo.addItem(itemFabric('equipment', 'Axe Of Glory'))
  cargo.addItem(itemFabric('consumable', 'Healing Potion'))
  cargo.addItem(itemFabric('consumable', 'Healing Potion'))
  cargo.addItem(itemFabric('fake', 'Money', 420))
  cargo.addItem(itemFabric('fake', 'Money', 420))
  let idToDrop = cargo.items.at(-1).id

  let droppedItem = cargo.dropItemById(idToDrop, 333)
  cargo.addItem(itemFabric('fake', 'Money', 111))

  console.assert(cargo.findItemByCaption('Money').count === 618)
  console.assert(droppedItem.count === 333)
}

function выброс_одиночного_предмета() {
  const activities = new Activities()
  const cargo = new Cargo(activities)
  cargo.addItem(itemFabric('equipment', 'Axe Of Glory'))
  cargo.addItem(itemFabric('equipment', 'Axe Of Glory'))
  cargo.addItem(itemFabric('consumable', 'Healing Potion'))
  cargo.addItem(itemFabric('consumable', 'Healing Potion'))
  cargo.addItem(itemFabric('fake', 'Money', 420))
  cargo.addItem(itemFabric('fake', 'Money', 420))
  let idToDrop = cargo.items.at(1).id

  let droppedItem = cargo.dropItemById(idToDrop)

  console.assert(cargo.findItemById(idToDrop) === undefined)
  console.assert(droppedItem.id === idToDrop)
}

function выброс_cгруппированного_предмета() {
  const activities = new Activities()
  const cargo = new Cargo(activities)
  cargo.addItem(itemFabric('equipment', 'Axe Of Glory'))
  cargo.addItem(itemFabric('equipment', 'Axe Of Glory'))
  cargo.addItem(itemFabric('consumable', 'Healing Potion'))
  cargo.addItem(itemFabric('consumable', 'Healing Potion'))
  cargo.addItem(itemFabric('fake', 'Money', 420))
  cargo.addItem(itemFabric('fake', 'Money', 420))
  let idToDrop = cargo.items.at(2).id

  let droppedItem = cargo.dropItemById(idToDrop)

  console.assert(cargo.findItemById(idToDrop) === undefined)
  console.assert(droppedItem.id === idToDrop)
  console.assert(cargo.groupedItems.length === 4)
}

function раздвоение_счётного_предмета() {
  let fake1 = new itemFabric('fake', 'Money', 50)
  let fake2 = fake1.drop(10)
  let fake3 = fake2.drop(3)
  let fake4 = fake1.drop(30)
  console.assert(fake1.count === 10)
  console.assert(fake2.count === 7)
  console.assert(fake3.count === 3)
  console.assert(fake4.count === 30)
}

выброс_фейк_предмета()
выброс_одиночного_предмета()
выброс_cгруппированного_предмета()
раздвоение_счётного_предмета()
