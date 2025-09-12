import EventEmitterAdapter from '../EventEmitterAdapter.js'

const view = {
  events: new EventEmitterAdapter(),

  onSubmitForm(e) {
    e.preventDefault()
    e.stopPropagation()
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
  onRightClickCharacter(e) {
    e.preventDefault()
    e.stopPropagation()
    if (!e.target.classList.contains('character')) return
    const detail = e.target.id
    this.events.emit('on-select-target', detail)
  },
  renderPlayerCoords(coords) {
    elPlayer.style = `--x:${coords.x};--y:${coords.y}`
  },
  renderEnemyCoords(coords) {
    elEnemy.style = `--x:${coords.x};--y:${coords.y}`
  },
  renderPlayerCreation() {
    elField.innerHTML += `<button class="character" id="elPlayer">o.O</button>`
    elField.addEventListener(
      'contextmenu',
      view.onRightClickCharacter.bind(view)
    )
  },
}

elFormCreatePlayer.addEventListener('submit', view.onSubmitForm.bind(view))
elField.addEventListener('contextmenu', view.onRightClickField.bind(view))
elField.addEventListener('dblclick', view.onDoubleClickField.bind(view))
elEnemy.addEventListener('contextmenu', view.onRightClickCharacter.bind(view))

export { view }
