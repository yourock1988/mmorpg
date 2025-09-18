export default class EventEmitterAdapter extends EventTarget {
  on(event, listener) {
    this.addEventListener(event, e => listener.bind(this)(e.detail))
    return this
  }

  once(event, listener) {
    const handler = e => {
      this.removeEventListener(event, handler)
      listener(e.detail)
    }
    this.addEventListener(event, handler)
    return this
  }

  off(event, listener) {
    this.removeEventListener(event, e => listener(e.detail))
    return this
  }

  emit(event, ...args) {
    const customEvent = new CustomEvent(event, {
      detail: args.length > 1 ? args : args[0],
    })
    this.dispatchEvent(customEvent)
    return this
  }

  addListener(event, listener) {
    return this.on(event, listener)
  }

  removeListener(event, listener) {
    return this.off(event, listener)
  }

  removeAllListeners(event) {
    // EventTarget не имеет встроенного способа удалить все слушатели,
    // поэтому клонируем объект
    const newTarget = new EventEmitterAdapter()
    Object.setPrototypeOf(this, Object.getPrototypeOf(newTarget))
    Object.assign(this, newTarget)
    return this
  }

  listeners(event) {
    // EventTarget не предоставляет доступ к слушателям,
    // поэтому возвращаем пустой массив
    return []
  }

  rawListeners(event) {
    // Аналогично listeners, возвращаем пустой массив
    return []
  }

  eventNames() {
    // EventTarget не отслеживает имена событий,
    // возвращаем пустой массив
    return []
  }

  listenerCount(event) {
    // EventTarget не предоставляет информацию о количестве слушателей
    return 0
  }
}

// Экспорт для использования в модулях

// if (typeof module !== 'undefined' && module.exports) {
//   module.exports = EventEmitterAdapter
// }
