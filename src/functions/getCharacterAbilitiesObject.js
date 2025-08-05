export default function getCharacterAbilitiesObject(abilities) {
  const types = ['persists', 'auras', 'buffs', 'debuffs', 'skills', 'spells']
  return Object.fromEntries(
    types.flatMap(type =>
      abilities[type].map(({ caption, level }) => [caption, level])
    )
  )
}
