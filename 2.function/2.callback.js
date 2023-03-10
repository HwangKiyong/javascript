//callback 내부적으로 사용하는 메소드이다. 굉장히 많이 사용한다.
function sayOdd(num) {
    console.log(`${num} is an odd number.`)
}

function sayEven(num) {
    console.log(`${num} is an even number.`)
}

function lookNum(fn1, fn2) {
    const num = parseInt(Math.random() * 10) + 1 //1이상 10이하의 값을 랜덤하게 얻는다.
    if(num % 2 != 0) fn1(num)
    else fn2(num)   //fn1, fn2 가 callback이다 parameter로 받는 함수를 callback이라고 한다.
}

lookNum(sayOdd, sayEven)

function sayOdd2(num) {
    console.log(`${num}은 홀수입니다.`)
}

function sayEven2(num) {
    console.log(`${num}은 짝수입니다.`)
}

lookNum(sayOdd2, sayEven2)

//
let chef1 = function(food) {
    return `달콤한 ${food}.\n`
}

let chef2 = function(food) {
    return `매운 ${food}.\n`
}

let waiter = function(food, chef) {
    return chef(food)
}

console.log(waiter('짜장면', chef1),
            waiter('짜장면', chef2),
            waiter('짬뽕', chef2))