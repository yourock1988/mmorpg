import Character from '../../../../src/classes/character/Character.js'
import equipmentFabric from '../../../../src/abstract-fabric/items/fabrics/equipmentFabric.js'

function characterDieWithKillingDamage() {
  const characterGood = new Character('Good', 'Orc', 'Fighter', 'Raider')
  const characterBad = new Character('Bad', 'Orc', 'Fighter', 'Raider')
  const killingDamage = characterGood.hp

  characterBad.sendDamageToTarget(characterGood, killingDamage)

  characterGood.social.destroy()
  characterBad.social.destroy()
  console.assert(characterGood.isLive === false)
  console.assert(characterGood.hp === 0)
}

function increaseStatsWhenLevelUp() {
  const characterGood = new Character('Good', 'Orc', 'Fighter', 'Raider')
  characterGood.leveler.exp = 1n
  const oldStats = { ...characterGood.statsCombat.current }

  characterGood.leveler.exp = characterGood.leveler.nextLvlExp

  console.assert(
    oldStats.PAtk < characterGood.statsCombat.current.PAtk &&
      oldStats.PDef < characterGood.statsCombat.current.PDef &&
      oldStats.Accuracy < characterGood.statsCombat.current.Accuracy &&
      oldStats.CritRate < characterGood.statsCombat.current.CritRate &&
      oldStats.AtkSpd < characterGood.statsCombat.current.AtkSpd &&
      oldStats.MAtk < characterGood.statsCombat.current.MAtk &&
      oldStats.MDef < characterGood.statsCombat.current.MDef &&
      oldStats.Evasion < characterGood.statsCombat.current.Evasion &&
      oldStats.Speed < characterGood.statsCombat.current.Speed &&
      oldStats.CastSpd < characterGood.statsCombat.current.CastSpd
  )

  characterGood.social.destroy()
  characterGood.activities.removeAll()
}

function увеличатся_ли_статы_при_надетом_снаряжении() {
  const characterGood = new Character('Good', 'Orc', 'Fighter', 'Raider')
  const weapon = equipmentFabric('Axe Of Glory')
  characterGood.inventory.cargo.addItem(weapon)
  const idToWear = characterGood.inventory.cargo.items[0].id
  const oldStats = { ...characterGood.statsCombat.current }

  characterGood.inventory.wearItemById(idToWear)

  console.assert(characterGood.statsCombat.current.PAtk > oldStats.PAtk)

  characterGood.social.destroy()
  characterGood.activities.removeAll()
}

function уменьшатся_ли_статы_при_снятии_снаряжения() {
  const characterGood = new Character('Good', 'Orc', 'Fighter', 'Raider')
  const weapon = equipmentFabric('Axe Of Glory')
  characterGood.inventory.cargo.addItem(weapon)
  const idToWear = characterGood.inventory.cargo.items[0].id
  characterGood.inventory.wearItemById(idToWear)
  const oldStats = { ...characterGood.statsCombat.current }

  characterGood.inventory.unwearItemBySlotName('weapon')

  console.assert(characterGood.statsCombat.current.PAtk < oldStats.PAtk)

  characterGood.social.destroy()
  characterGood.activities.removeAll()
}

// function увеличатся_ли_статы_при_бафе() {
//   const characterGood = new Character('Good', 'Orc', 'Fighter', 'Raider')
//   const oldStats = { ...characterGood.statsCombat.current }
//   const haste = buffsFabric('Haste', 1n)

//   characterGood.activities.add(haste)

//   console.assert(characterGood.statsCombat.current.Speed > oldStats.Speed)
// }

// function умешьшатся_ли_статы_при_снятии_бафа() {
//   const characterGood = new Character('Good', 'Orc', 'Fighter', 'Raider')
//   const haste = buffsFabric('Haste', 1n)
//   characterGood.activities.add(haste)
//   const oldStats = { ...characterGood.statsCombat.current }

//   characterGood.activities.buffs = []

//   console.assert(characterGood.statsCombat.current.Speed < oldStats.Speed)
// }

// characterDieWithKillingDamage()

increaseStatsWhenLevelUp()
увеличатся_ли_статы_при_надетом_снаряжении()
уменьшатся_ли_статы_при_снятии_снаряжения()
// увеличатся_ли_статы_при_бафе()
// умешьшатся_ли_статы_при_снятии_бафа()
