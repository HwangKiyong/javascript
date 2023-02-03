//function을 사용하는 이유는 중복제거와 가독성을 늘리기 위해이다.
function greet() {
    console.log('hello')
} //function네임은 동사를 써야한다.

greet()

let salute = function() {
    console.log('hi')
}
//function도 데이터로 취급을한다.
salute()
console.log(salute) //function은 객체이다. function안에 salate 가 있다는것을 확인할수있다.

let sayHello = function(user, greeting) {
    return `${greeting}, ${user}`
}
console.log(sayHello('rebecca', 'hello'))

// 과제: HI 라고 인사하는 function 을 정의하고, 실행하라.
const sayHi = function() {
    console.log('HI')
}
const say = sayHi
say()

let shout = function() {
    return function() {
        console.log('yoo hoo')
    }
}

let speak = shout()
speak();
//; 으로 밑에와 분별을 시켜주면된다.
(function() {
    console.log('earth')
})() //1회용이다.

let myFn = function(fn) {
    const result = fn() 
    console.log(result)
}

myFn(function() {
    return 'moon'
}) //이름없는 function은 대체로 parameter로 쓴다. 

let argFn = function() {
    return 'star'
}
myFn(argFn)

let showMsg = function(from, msg='no message') { //기본값을 메세지로 지정할 수 있다.
    console.log(`${from}: ${msg}`)
}

showMsg('trinity', 'follow rabbit')
showMsg('trinity')