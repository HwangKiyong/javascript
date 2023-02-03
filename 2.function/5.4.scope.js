let userName = 'neo'
sayHi()
//global객체가 생기면서 sayHi라는 property가 생긴다. function값은 할당이 되어있는것이다.

function sayHi() {
    console.log('Hi', userName)
}

sayHi()

sayHello()

const sayHello = function() {
    console.log('Hello,' , userName)
}

sayHello()
