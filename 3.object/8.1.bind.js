let user = {
    userName: 'madona',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}

user.greet()

setTimeout(user.greet, 100) //객체가 없이 user.greet 을 콜했기 때문에 undefined 다.

let fn = user.greet
setTimeout(fn, 200)

setTimeout(() => user.greet(), 300) // () => user.greet() callback이다.
