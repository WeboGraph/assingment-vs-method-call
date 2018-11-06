class Dragon {
    constructor(element) {
        this.breatheCount = 0
        this.element = element
    }

    breathe() {
        return (this.breatheCount < 3) ?
            `I'm breathing ${this.element}! The actual count is ${this.breatheCount++}` :
            `I will not breathing ${this.element} anymore!`
    }

    replaceBreathing() {
        this.breathe = () => `something else`
    }

    resetCount() {
        this.breatheCount = 0
    }
}

const fluffyskinz = new Dragon('memez')
const button = {
    onClick: null
}

button.onClick = () => fluffyskinz.breathe()

button.onClick() //?
fluffyskinz.breathe() //?
fluffyskinz.breathe() //?
button.onClick() //?

fluffyskinz.replaceBreathing()
fluffyskinz.resetCount()

fluffyskinz.breathe() //?
button.onClick() //?