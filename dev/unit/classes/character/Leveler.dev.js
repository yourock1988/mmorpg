import Leveler from '../../../../src/classes/character/Leveler.js'

function возможно_ли_остаться_с_exp_меньше_1n() {
  const leveler = new Leveler()
  const oldLvl = leveler.lvl

  leveler.forceLevelDown()

  console.assert(leveler.lvl === oldLvl)
}

function возможно_ли_перейти_на_следующий_уровень() {
  const leveler = new Leveler()
  const oldLvl = leveler.lvl

  leveler.forceLevelUp()

  console.assert(leveler.lvl === oldLvl + 1n)
}

function возможно_ли_перейти_на_предидущий_уровень() {
  const leveler = new Leveler()
  leveler.forceLevelUp()
  const oldLvl = leveler.lvl

  leveler.forceLevelDown()

  console.assert(leveler.lvl === oldLvl - 1n)
}

function прогресс_обнуляется_при_переходе_на_следующий_уровень() {
  const leveler = new Leveler()
  leveler.receiveExp(123n)

  leveler.forceLevelUp()

  console.assert(leveler.progress === 0)
}

function прогресс_при_переходе_на_предидущий_уровень() {
  const leveler = new Leveler()
  leveler.receiveExp(123n)

  leveler.forceLevelDown()

  console.assert(leveler.progress <= 100)
}

возможно_ли_остаться_с_exp_меньше_1n()
возможно_ли_перейти_на_следующий_уровень()
возможно_ли_перейти_на_предидущий_уровень()
прогресс_обнуляется_при_переходе_на_следующий_уровень()
прогресс_при_переходе_на_предидущий_уровень()
