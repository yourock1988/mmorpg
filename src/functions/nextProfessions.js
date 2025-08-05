import profHierarhy from '../dicts/profHierarhy.js'

export default function nextProfessions(start) {
  let v
  function helper(graph, start) {
    Object.entries(graph ?? {}).forEach(([key, val]) => {
      if (key === start) v = val
      helper(graph[key], start)
    })
  }
  helper(profHierarhy, start)
  return Object.keys(v)
}
