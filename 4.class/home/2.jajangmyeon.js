/*
3.object/home/4.jajangmyeon.js 를 class 로 refactoring 하라.
*/
class Food {
    constructor(taste, foodName) {
        this.taste = taste 
        this.foodName = foodName        
    }      
    [Symbol.toPrimitive]() {
        return `${this.taste} ${this.foodName}.`
    }   //serialize이다.
}

class Chef {
    constructor(taste) {
        this.cook = foodName => new Food(taste, foodName)
    }       
}

class Waiter {
    order(foodName, chef) {
        return chef.cook(foodName)
    }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)

console.log(waiter.order('짜장면', chef2) + '')
console.log(`${waiter.order('짜장면', chef2)}`)

/*
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
*/