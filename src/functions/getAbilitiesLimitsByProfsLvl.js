import profAbilitiesSheet from '../dicts/profAbilitiesSheet.js'

export default function getAbilitiesLimitsByProfsLvl(profs, lvl) {
  const abilitiesLimits = {}
  profs.toReversed().forEach(prof => {
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
  })
  return Object.entries(abilitiesLimits)
}
