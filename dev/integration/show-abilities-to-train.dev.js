import Character from '../../src/classes/character/Character.js'
import abilityFabric from '../../src/abstract-fabric/abilities/abilityFabric.js'
import getAvailableForTrainAbilities from '../../src/functions/getAvailableForTrainAbilities.js'

const player = new Character('Good', 'Orc', 'Fighter')
player.abilities.learn(abilityFabric('buff', 'Self Heal', 1n))
player.abilities.learn(abilityFabric('debuff', 'Dryad Root', 1n))
player.abilities.buffs[0].level = 2n
player.leveler.forceSetLevel(31n)
player.prof = 'Raider'
player.abilities.buffs.push({ caption: 'Noob Blessing', level: 7n })

let toTrainEntries = getAvailableForTrainAbilities(player)

// console.log(toTrainEntries)

console.assert(toTrainEntries[3][1] === 8n)

////

player.destroy()
