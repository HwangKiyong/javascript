/*
2.function/home/3.jajangmyeon.js 를 객체지향으로 refactoring 하라.
*/

function Food(taste, foodName) {
    this.taste = taste
    this.foodName = foodName    
}

function Chef(taste) {      //()안에는 각각 구별할것을 넣어줘야한다.
    this.cook = foodName => new Food(taste, foodName)
}

function Waiter() {
    this.order = (foodName, chef) => chef.cook(foodName)
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

console.log(waiter.order('짜장면', chef1))   //callback이다.
console.log(waiter.order('짬뽕', chef2))

/*
let chef1 = food => `달콤한 ${food}\n`

let chef2 = food => `매운 ${food}\n`

let waiter = (food, chef) => chef(food)

console.log(waiter("짜장면", chef1))           
*/