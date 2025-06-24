export default function viewCharacter(c) {
  console.log({
    nick: c.nick,
    progress: c.leveler.progress + '%',
    lvl: c.leveler.lvl,
    sp: c.social.sp,
    hpTotal: c.health.total,
    hpCurrent: c.health.current,
    isLive: c.health.isLive,
    PAtk: c.statsCombat.current.PAtk,
    PDef: c.statsCombat.current.PDef,
    AtkSpd: c.statsCombat.current.AtkSpd,
  })
}
