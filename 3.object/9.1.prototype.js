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