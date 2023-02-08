class User {
    constructor(userName){  //function 을 변형한것이다.
        this.userName = userName //생성자 내에서 this 객체 사용할것
    }

    /*
    function User(userName) {
        this.userName = userName
    } 
    */
    sayHi() {
        console.log(`Hi, I am ${this.userName}.`)
    }
}

let user = new User('john')
console.log(user.userName)
user.sayHi()

// User('john') class 에서는 new 없이는 생성자를 사용할수 없다.

class Animal {
    constructor() {
        this.animalName = 'animal'
    }

    run() {
        console.log(`${this.animalName} run.`)
    }

    stop() {
        console.log(`${this.animalName} stop.`)
    }
}

let animal = new Animal()
console.log(animal.animalName)
animal.run()
animal.stop()

function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase)
        }
    }
} 

User = makeClass('hello')
new User().sayHi()