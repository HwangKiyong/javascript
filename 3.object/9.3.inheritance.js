let animal = {
    animalName: 'animal'
}

animal = new Object()
animal.animalName = 'animal'

//과제: 토끼를 object literal 및 constructor 로 만들어라.
//      토끼는 age = 3, property 를 갖고 있다.
let rabbit = {
    age: 3
}       //Object literal

rabbit = new Object()   //Object 생성자
rabbit.age = 3

console.log(animal.__proto__)
console.log(rabbit.__proto__)

console.log(rabbit.animalName, rabbit.age) //name 은 코딩하지 않앗고, age는 코딩했다.

animal = {
    walk() {
        console.log('animal walk')
    }
}

rabbit = {
    __proto__: animal //상속관계가 표현되는것이다., rabbit is an animal이 된다.
}   

rabbit.walk()

let user = {
    userName: 'user'
}

let administrator = {
    __proto__: user
}

console.log(administrator.userName)

administrator.userName = 'jonadan'  // 나에게 있는 속성은 내껄쓴다. 부모꺼를 쓰지않는다.
console.log(administrator.userName)

animal = {
    animalName: 'animal',
    weight: 50,
    eat() {
        console.log(`${this.animalName} eat.`)
    }
}

rabbit = {
    rabbitName: 'rabbit',
    __proto__: animal
}

let lion = {
    lionName: 'lion',
    __proto__: animal
}

animal.eat()
rabbit.eat()
lion.eat()

console.log(Object.keys(rabbit)) //keys 에서는 부모가 가지고 있는것까지는 조회하지않는다.

for(let key in rabbit)  //iterating은 본인 외에도 부모까지도 조회한다.
    console.log(key)

let msg
for(let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key)
    msg = isOwn ? `child's key: ${key}` : `parent's key: ${key}`
    console.log(msg)
}