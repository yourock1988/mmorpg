export default function viewCharacter(c) {
  console.log({
    nick: c.nick,
    progress: c.leveler.progress + '%',
    lvl: c.leveler.lvl,
    sp: c.sp,
    hpTotal: c.health.total,
    hpCurrent: c.health.current,
    isLive: c.health.isLive,
    PAtk: c.statsCombat.PAtk,
    PDef: c.statsCombat.PDef,
    AtkSpd: c.statsCombat.AtkSpd,
  })
}
