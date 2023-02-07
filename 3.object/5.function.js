function sayHi(myName, ...jobs) {
    console.log(`Hi, I am ${myName}.`)
}

sayHi('john')

console.log(typeof sayHi) //sayHi의 타입은 function 이다.
console.log(sayHi.name)
console.log(sayHi.length) //.length는 1이 출력된다. 1의 의미는 고정된 parameter의 갯수이다.

let user = {
    sayHi() {},
    sayBye() {}
}

console.log(user.sayHi.name)
console.log(user.sayBye.name)

sayHi = function() {
    console.log('hi')
    sayHi.count++
}

sayHi.count = 0
sayHi()
sayHi()

console.log(`call count: ${sayHi.count}.`)
