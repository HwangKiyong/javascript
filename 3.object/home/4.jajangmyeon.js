/*
2.function/home/3.jajangmyeon.js 를 객체지향으로 refactoring 하라.
*/
function Food(foodName) {
    this.foodName = foodName   
}

function Chef() {
    this.cook = foodName => new Food(`달콤한 ` + foodName)
    this.cook1 = foodName => new Food(`매운 ` + foodName)   
}

function Customer() {
    this.eat = food => new Waiter(chef.food)
}

function Waiter() {
    this.bring = food => new Customer(chef.food)
}

const chef = new Chef()
const customer = new Customer()
const waiter = new Waiter()

customer.eat(waiter.bring(chef.cook('짜장면')))
customer.eat(waiter.bring(chef.cook1('짜장면')))
/*
let chef1 = food => `달콤한 ${food}\n`

let chef2 = food => `매운 ${food}\n`

let waiter = (food, chef) => chef(food)

console.log(waiter("짜장면", chef1))           
*/