function compileActs(acts) {
  return processContainer(Object.entries(acts))
}
function processContainer(entries) {
  return Object.fromEntries(entries.map(processBoxes))
}
function processBoxes([k, v]) {
  if (!v) return []
  return [k, Object.fromEntries(Object.entries(v).map(processBox))]
}
function processBox([k, v]) {
  return [k, processLines(Object.entries(v))]
}
function processLines(entries) {
  const body = entries.map(processLine).join('\n')
  return new Function('o', body)
}
function processLine([k, v]) {
  const type = k.includes('_$') ? 'fnLethal' : k.includes('$') ? 'fn' : 'prop'
  k = k.replace('$', '').replace('_', '')
  if (type === 'fn') return `o.${k}(${v})`
  if (type === 'prop') return `o.${k} = this.getPercent(o.${k}, ${v})`
  if (type === 'fnLethal') return `this.executor(o.${k}(${v}))`
}
export default compileActs
