import profHierarhy from '../dicts/profHierarhy.js'

export default function prevProfessions(start) {
  let v = []
  let x = []
  function helper(graph, start) {
    Object.entries(graph ?? {}).forEach(([key, val]) => {
      if (v.at(-1) === start) return
      v.push(key)
      helper(graph[key], start)
      x.push(key)
      if (!x.includes(start)) x = []
    })
  }
  helper(profHierarhy, start)
  return x.slice(0, -1)
}
