function DragonFactory (element) {
    let breatheCount = 0;
    return {
        breathe () {
            return  (breatheCount < 3)
                ? `I'm breathing ${element}! The count is ${breatheCount++}`
                : 'I will not breathing anymore!'
        },
        replaceBreathing () {
            this.breathe = () => `something else`
        },
        resetCount () {
            breatheCount = 0
        }
    }
}

const fluffyskinz = DragonFactory('memez')
const button = { onClick: null }

button.onClick = fluffyskinz.breathe

button.onClick() //?
fluffyskinz.breathe() //?
fluffyskinz.breathe() //?
button.onClick() //?

fluffyskinz.replaceBreathing()
fluffyskinz.resetCount()

fluffyskinz.breathe() //?
button.onClick() //?
