import defaultStats from '../../../src/dicts/defaultStats.js'
import compileActs from '../../../src/functions/compileActs.js'
import acts from '../../fixtures/acts.fixture.js'

const round = n => +n.toFixed(2)
const percent = (n, p) => round((n / 100) * p)
const getPercent = (n, p) => round(n + percent(n, p))

const statsCombat = { ...defaultStats }
const health_mana = {
  statsCombat: { current: statsCombat },
  gain() {
    console.log('gain')
    return 'ok_gain'
  },
  lose() {
    console.log('lose')
    return 'ok_lose'
  },
}
const fight = {
  receiveDamageMagic() {
    console.log('damage_magic')
    return 'ok_damage'
  },
}

let xxx = compileActs(acts)

// console.log(xxx.pulse.toMana.toString())
console.log(xxx.pulse.toHealth.toString())

xxx.enforce.getPercent = getPercent
xxx.pulse.executor = s => console.log('>>', s)
xxx.once.executor = s => console.log('>>', s)

console.log(statsCombat)
xxx.enforce.toStatsCombat(statsCombat)
console.log(statsCombat)

xxx.pulse.toHealth(health_mana)
xxx.pulse.toMana(health_mana)

xxx.once.toHealth(health_mana)
xxx.once.toMana(health_mana)
xxx.once.toFight(fight)
