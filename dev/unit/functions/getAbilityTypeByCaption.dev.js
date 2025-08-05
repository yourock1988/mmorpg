import getAbilityTypeByCaption from '../../../src/functions/getAbilityTypeByCaption.js'

let type

type = getAbilityTypeByCaption('Breathe Aura')
console.assert(type === 'auras')

type = getAbilityTypeByCaption('Curse Poison')
console.assert(type === 'debuffs')
