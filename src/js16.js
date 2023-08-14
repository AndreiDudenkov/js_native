store.subscribe(function subscriber() {
})
button.AddEventLustener('click', function subscriber() {
})
promises.then('click', function subscriber() {
})
setTimeout(function subscriber() {
}, 1000)

const store = {
    _subscribers: [],
    dispatch() {
        this._subscribers.forEach(s => s())
    },
    subscribe(subscriber) {
        this._subscribers.push(subscriber)
    }
}

const button = {
    _subscribers: {
        'click': [],
        'focus': []
    },
    click() {
        this._subscribers['click'].forEach(s => s())
    },
    focus() {
    },
    addEventListener(eventName, subscriber) {
        this._subscribers[eventName].push(subscriber)
    },
    removeEventListener(eventName, subscriber) {
        this._subscribers[eventName] = this._subscribers[eventName].filter(s => s !== subscriber)
    }

}
const message = ()=>{
    console.log('click')
}
button.addEventListener('click', message)
button.removeEventListener('click', message)