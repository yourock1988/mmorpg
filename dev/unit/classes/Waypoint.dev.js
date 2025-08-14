import Target from '../../../src/classes/character/Target.js'
import Subject from '../../../src/classes/Subject.js'
import Waypoint from '../../../src/classes/Waypoint.js'

async function test0() {
  const subject = new Subject()
  const target = new Target(subject.coords)
  const waypoint = new Waypoint(target)
  console.assert(waypoint.isRunning === false)
  const promise = waypoint.changeDirection({ x: 5, y: 5 })
  console.assert(waypoint.isRunning === true)
  await promise
  console.assert(waypoint.isRunning === false)
}

// async function test1() {
//   await waypoint.changeDirection({ x: 15, y: 15 })
//   console.assert(subject.coords.x > 14 && subject.coords.y > 14)
// }

async function test2() {
  const subject = new Subject()
  const target = new Target(subject.coords)
  const waypoint = new Waypoint(target)
  const promise = waypoint.changeDirection({ x: 15, y: 15 })
  setTimeout(() => waypoint.changeDirection({ x: 15, y: 0 }), 1000)
  setTimeout(
    () =>
      console.assert(
        Math.trunc(subject.coords.x) === 14 &&
          Math.trunc(subject.coords.y) === 0
      ),
    2200
  )
}

// async function test3() {
//   waypoint.changeDirection({ x: 15, y: 15 })
//   setTimeout(() => waypoint.changeDirection({ x: -15, y: -15 }), 1000)
//   setTimeout(() => waypoint.changeDirection({ x: 15, y: 0 }), 2000)
//   setTimeout(() => waypoint.changeDirection({ x: 15, y: -15 }), 4000)
//   setTimeout(() => waypoint.changeDirection({ x: -15, y: -15 }), 5500)
//   setTimeout(() => waypoint.changeDirection({ x: 0, y: 0 }), 7000)
//   setTimeout(
//     () =>
//       console.log(Math.trunc(subject.coords.x), Math.trunc(subject.coords.y)),
//     9000
//   )
// }

// async function test4() {
//   const subject = new Subject()
//   const target = new Target(subject.coords)
//   const waypoint = new Waypoint(target)
//   await waypoint.changeDirection({ x: 15, y: 15 })
//   console.log(subject.coords)
//   console.log(waypoint.coords)

//   subject.coords.teleportTo({ x: -7, y: -7 })
//   waypoint.coords.teleportTo({ x: -7, y: -7 })

//   console.log(subject.coords)
//   console.log(waypoint.coords)
// }

test0()
test2()
// test4()
