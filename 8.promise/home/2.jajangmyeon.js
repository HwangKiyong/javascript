/*
4.class/home/2.jajangmyeon.js 를 promise 로 refactoring 하라.
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
    async cook() {
        return await Promise.resolve()
    }    
}

class Waiter {
    async order(foodName, chef) {
        return await chef.cook(Food)
    }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)

console.log(waiter.order('짜장면', chef2) + '')
console.log(`${waiter.order('짜장면', chef2)}`)
