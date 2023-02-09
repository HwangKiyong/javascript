class CoffeMachine {
    waterAmount = 0 //일반속성,객체의 속성이 되는것이다.

    constructor(voltage) {
        this.voltage = voltage
    }
}

console.log(CoffeMachine)
console.log(Object.keys(CoffeMachine))
console.log(Object.keys(CoffeMachine.prototype))

let machine = new CoffeMachine(220)
console.log(machine)
console.log(Object.keys(machine))

//
CoffeMachine = class {
    _waterAmount    //protected 이다. get 과 set을 사용하며된다.

    get waterAmount() {
        return this._waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this._waterAmount = 2 * waterAmount
    }
}

machine = new CoffeMachine()
console.log(machine)

machine.waterAmount = 1
console.log(machine.waterAmount)

machine._waterAmount = 11
console.log(machine._waterAmount)   //protect가 안된다.