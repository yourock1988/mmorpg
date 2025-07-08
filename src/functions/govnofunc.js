export default function govnofunc(graph, start) {
  let v
  function gonvohelper(graph, start) {
    Object.entries(graph ?? {}).forEach(([key, val]) => {
      if (key === start) v = val
      gonvohelper(graph[key], start)
    })
  }
  gonvohelper(graph, start)
  return Object.keys(v)
}
