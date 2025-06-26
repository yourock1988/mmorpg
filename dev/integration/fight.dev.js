import equipmentFabric from '../../src/abstract-fabric/items/fabrics/equipmentFabric.js'
import Character from '../../src/classes/character/Character.js'
import FightHalf from '../../src/classes/FightHalf.js'
import viewCharacter from '../../src/functions/viewCharacter.js'

const P1 = new Character('Player1', 'Orc', 'Fighter')
const P2 = new Character('Player2', 'Orc', 'Mage')

const fightHalf1 = new FightHalf(P1, P2, false)
const fightHalf2 = new FightHalf(P2, P1, false)

// viewCharacter(P1)
// viewCharacter(P2)

P2.inventory.cargo.addItem(equipmentFabric('Axe Of Glory'))
const idToWear = P2.inventory.cargo.items[0].id
// P2.inventory.wearItemById(idToWear)
// viewCharacter(P2)

setTimeout(() => P2.inventory.wearItemById(idToWear), 2500)

fightHalf1.autoAttack()
fightHalf2.autoAttack()

setTimeout(() => {
  console.assert(!P1.health.isLive && P2.health.isLive)
  P1.social.destroy()
  P2.social.destroy()
  P1.activities.removeAll()
  P2.activities.removeAll()
}, 5800)
