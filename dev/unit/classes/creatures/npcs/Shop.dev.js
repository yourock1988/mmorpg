import itemFabric from '../../../../../src/abstract-fabric/items/itemFabric.js'
import Player from '../../../../../src/classes/creatures/Player.js'
import Shop from '../../../../../src/classes/creatures/npcs/Shop.js'

function вычесление_количества_итемов_в_наличии() {
  const shop = new Shop()
  console.assert(shop.availableItems.length === 39)
  shop.destroy()
}

function покупка_итема_за_деньги() {
  const player = new Player('Player', 'Orc', 'Fighter')
  const shop = new Shop(player)
  const { cargo } = player.inventory
  const { type, caption } = shop.availableItems[0]
  cargo.addItem(itemFabric('fake', 'Money', 9))
  shop.target.set(player)

  shop.sellItem(type, caption)

  console.assert(
    cargo.findItemByCaption('Money').count === 0 &&
      !!cargo.findItemByCaption('Soulshot: No Grade')
  )

  player.destroy()
  shop.destroy()
}

function покупка_итема_за_деньги_при_нехватке_денег() {
  const player = new Player('Player', 'Orc', 'Fighter')
  const shop = new Shop(player)
  const { cargo } = player.inventory
  const { type, caption } = shop.availableItems[0]
  cargo.addItem(itemFabric('fake', 'Money', 8))
  shop.target.set(player)

  shop.sellItem(type, caption)

  console.assert(
    cargo.findItemByCaption('Money')?.count === 8 &&
      !cargo.findItemByCaption('Soulshot: No Grade')
  )

  player.destroy()
  shop.destroy()
}

покупка_итема_за_деньги()
вычесление_количества_итемов_в_наличии()
покупка_итема_за_деньги_при_нехватке_денег()
