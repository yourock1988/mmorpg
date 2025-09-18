import EventEmitterAdapter from '../EventEmitterAdapter.js'

const view = {
  events: new EventEmitterAdapter(),

  onSubmitForm(e) {
    e.preventDefault()
    e.stopPropagation()
    const formData = Object.fromEntries(new FormData(e.target))
    this.events.emit('UI.PLAYER.CREATE', formData)
  },
  onRightClickField(e) {
    e.preventDefault()
    e.stopPropagation()
    if (e.target !== elField) return
    const { offsetX: x, offsetY: y } = e
    this.events.emit('UI.PLAYER.WALK', { x, y })
  },
  onDoubleClickField(e) {
    e.preventDefault()
    e.stopPropagation()
    if (e.target !== elField) return
    const { offsetX: x, offsetY: y } = e
    this.events.emit('UI.PLAYER.TELEPORTED', { x, y })
  },
  onRightClickCharacter(e) {
    e.preventDefault()
    e.stopPropagation()
    if (!e.target.classList.contains('character')) return
    const { id } = e.target
    this.events.emit('UI.PLAYER.SELECTED', id)
  },

  renderPlayerPoint(point) {
    elPlayer.style = `--x:${point.x};--y:${point.y}`
  },
  renderEnemyPoint(point) {
    elEnemy.style = `--x:${point.x};--y:${point.y}`
  },
  renderEnemyIsAlive(isAlive) {
    if (isAlive) elEnemy.textContent = '-_-'
    else elEnemy.textContent = 'x_x'
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
