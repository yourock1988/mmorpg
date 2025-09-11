import EventEmitterAdapter from '../EventEmitterAdapter.js'

const view = {
  events: new EventEmitterAdapter(),

  onSubmitForm(e) {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))
    this.events.emit('on-create-player', formData)
  },
  onRightClickField(e) {
    e.preventDefault()
    e.stopPropagation()
    if (e.target !== elField) return
    const { offsetX, offsetY } = e
    const detail = { x: offsetX, y: offsetY }
    this.events.emit('on-move-player', detail)
  },
  onDoubleClickField(e) {
    e.preventDefault()
    e.stopPropagation()
    if (e.target !== elField) return
    const { offsetX, offsetY } = e
    const detail = { x: offsetX, y: offsetY }
    this.events.emit('on-teleport-player', detail)
  },
  renderPlayerCoords(coords) {
    elPlayer.style = `--x:${coords.x};--y:${coords.y}`
  },
  renderEnemyCoords(coords) {
    elEnemy.style = `--x:${coords.x};--y:${coords.y}`
  },
  renderPlayerCreation() {
    elField.innerHTML += `<button class="character" id="elPlayer">o.O</button>`
  },
}

elFormCreatePlayer.addEventListener('submit', view.onSubmitForm.bind(view))
elField.addEventListener('contextmenu', view.onRightClickField.bind(view))
elField.addEventListener('dblclick', view.onDoubleClickField.bind(view))

export { view }
