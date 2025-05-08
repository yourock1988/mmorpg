import Character from '../../../src/classes/character/Character.js'
import listBuffs from '../../../src/lists/listBuffs.js'
import listEquipment from '../../../src/lists/listEquipment.js'
import listItems from '../../../src/lists/listItems.js'

function characterDieWithKillingDamage() {
  const characterGood = new Character('Good', 'Orc', 'Fighter', 'Raider')
  const characterBad = new Character('Bad', 'Orc', 'Fighter', 'Raider')
  const killingDamage = characterGood.hp

  characterBad.sendDamageToTarget(characterGood, killingDamage)

  console.assert(characterGood.isLive === false)
  console.assert(characterGood.hp === 0)
}

function increaseStatsWhenLevelUp() {
  const characterGood = new Character('Good', 'Orc', 'Fighter', 'Raider')
  characterGood.leveler.exp = 1n
  const oldStats = { ...characterGood.statsCombat }

  characterGood.leveler.exp = characterGood.leveler.nextLvlExp

  console.assert(
    oldStats.PAtk < characterGood.statsCombat.PAtk &&
      oldStats.PDef < characterGood.statsCombat.PDef &&
      oldStats.Accuracy < characterGood.statsCombat.Accuracy &&
      oldStats.CritRate < characterGood.statsCombat.CritRate &&
      oldStats.AtkSpd < characterGood.statsCombat.AtkSpd &&
      oldStats.MAtk < characterGood.statsCombat.MAtk &&
      oldStats.MDef < characterGood.statsCombat.MDef &&
      oldStats.Evasion < characterGood.statsCombat.Evasion &&
      oldStats.Speed < characterGood.statsCombat.Speed &&
      oldStats.CastSpd < characterGood.statsCombat.CastSpd
  )
}

function увеличатся_ли_статы_при_надетом_снаряжении() {
  const characterGood = new Character('Good', 'Orc', 'Fighter', 'Raider')
  characterGood.inventory.cargo.addItem(listEquipment[0])
  const idToWear = characterGood.inventory.cargo.items[0].id
  const oldStats = { ...characterGood.statsCombat }

  characterGood.inventory.wearItemById(idToWear)

  console.assert(characterGood.statsCombat.PAtk > oldStats.PAtk)
}

function уменьшатся_ли_статы_при_снятии_снаряжения() {
  const characterGood = new Character('Good', 'Orc', 'Fighter', 'Raider')
  characterGood.inventory.cargo.addItem(listEquipment[0])
  const idToWear = characterGood.inventory.cargo.items[0].id
  characterGood.inventory.wearItemById(idToWear)
  const oldStats = { ...characterGood.statsCombat }

  characterGood.inventory.unwearItemBySlotName('weapon')

  console.assert(characterGood.statsCombat.PAtk < oldStats.PAtk)
}

function увеличатся_ли_статы_при_бафе() {
  const characterGood = new Character('Good', 'Orc', 'Fighter', 'Raider')
  const oldStats = { ...characterGood.statsCombat }

  characterGood.buffs.push(listBuffs[1])

  console.assert(characterGood.statsCombat.Speed > oldStats.Speed)
}

function умешьшатся_ли_статы_при_снятии_бафа() {
  const characterGood = new Character('Good', 'Orc', 'Fighter', 'Raider')
  characterGood.buffs.push(listBuffs[1])
  const oldStats = { ...characterGood.statsCombat }

  characterGood.buffs = []

  console.assert(characterGood.statsCombat.Speed < oldStats.Speed)
}

увеличатся_ли_статы_при_бафе()
умешьшатся_ли_статы_при_снятии_бафа()
увеличатся_ли_статы_при_надетом_снаряжении()
уменьшатся_ли_статы_при_снятии_снаряжения()
increaseStatsWhenLevelUp()

// characterDieWithKillingDamage()
