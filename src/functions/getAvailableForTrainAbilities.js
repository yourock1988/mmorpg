import getAbilitiesLimitsByProfsLvl from './getAbilitiesLimitsByProfsLvl.js'
import getCharacterAbilitiesObject from './getCharacterAbilitiesObject.js'
import prevProfessions from './prevProfessions.js'

export default function getAvailableForTrainAbilities(character) {
  const { abilities, prof, leveler } = character
  const exists = getCharacterAbilitiesObject(abilities)
  const profs = prevProfessions(prof)
  return getAbilitiesLimitsByProfsLvl(profs, leveler.lvl)
    .filter(([caption, level]) => exists[caption] < level || !exists[caption])
    .map(([caption, level]) => [
      caption,
      exists[caption] < level ? exists[caption] + 1n : 1n,
    ])
}
