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
    }
}

class Chef {
    constructor(taste) {
        this.taste = taste
    }

    cook(foodName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(new Food(this.taste, foodName)), 1000)
        })
    }
}

class Waiter {
    async order(foodName, chef) {
       return await chef.cook(foodName)
    }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1).then(food => console.log(food + ''))