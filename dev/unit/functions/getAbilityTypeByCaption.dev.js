import getAbilityTypeByCaption from '../../../src/functions/getAbilityTypeByCaption.js'

let type

type = getAbilityTypeByCaption('Breathe Aura')
console.assert(type === 'aura')

type = getAbilityTypeByCaption('Curse Poison')
console.assert(type === 'debuff')
