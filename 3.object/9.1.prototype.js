let animal = {
    isAlive: true 
}

function Rabbit(rabbitName) {
    this.rabbitName = rabbitName
} 

console.log(Rabbit.prototype)

let rabbit = new Rabbit('black')
console.log(rabbit.isAlive)

Rabbit.prototype = animal
console.log(Rabbit.prototype)

rabbit = new Rabbit('white')
console.log(rabbit.isAlive)

//function 은 객체이다.
//prototype 엔 어떤객체의 주소값이 저장되어있다.

function Duck(duckName) {
    this.duckName = duckName
}

console.log(Duck.prototype) //plain Object
console.log(Duck.prototype.constructor)
console.log(Duck.prototype.constructor == Duck)

let duck = new Duck('duck')
console.log(duck.__proto__) //객체.__proto__ 객체의 prototype을 읽는다 문법은 아니지만 자주 사용된다.
console.log(duck.__proto__.constructor)

let duck2 = new Duck('duck2') 
console.log(duck2.__proto__ == duck.__proto__)

let duck3 = new duck.__proto__.constructor('duck')
duck3 = new duck.constructor('duck')

//생성자에는 prototype이라는 속성이 있다.
//생성자 prototype == 객체 prototype 이다.