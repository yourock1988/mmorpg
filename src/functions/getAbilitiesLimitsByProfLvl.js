import profAbilitiesSheet from '../dicts/profAbilitiesSheet.js'

export default function getAbilitiesLimitsByProfLvl(prof, lvl) {
  const abilitiesLimits = {}
  const profLevels = profAbilitiesSheet[prof]
  for (const profLevel in profLevels)
    if (+profLevel <= lvl)
      Object.entries(profLevels[profLevel]).forEach(
        ([abilityCaption, abilityLvl]) => {
          if (!(abilityLvl <= abilitiesLimits[abilityCaption])) {
            // console.log('+', abilityCaption, abilityLvl)
            abilitiesLimits[abilityCaption] = abilityLvl
          }
        }
      )
  return Object.entries(abilitiesLimits)
}
