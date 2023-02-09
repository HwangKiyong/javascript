class CoffeMachine {
    #waterAmount    //private이다

    get waterAmount() {
        return this.#waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this.#waterAmount = 2 * waterAmount
    }
}

console.log(CoffeMachine.prototype)

let machine = new CoffeMachine()
console.log(machine)

machine.waterAmount = 1
console.log(machine.waterAmount)

machine.#waterAmount = 1    //private 에서는 직접 접근할수 없다.

//class 를 사용 안하는 이유는 react에서 버려서 이다. 요즘은 잘 사용하지않는다.