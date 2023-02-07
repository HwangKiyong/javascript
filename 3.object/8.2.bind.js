let user = {
    userName: 'leo'
}

function greet() {
    console.log(`I am ${this.userName}.`)
}

greet()

let fn = greet.bind(user) //this 안에 user객체를 집어넣은것을 greet function을 return 한다.
fn()    //bind와 call의 차이점은 bind는 주어function을 return 하고 call은 주어function을 call한다.

setTimeout(fn, 100)

user = {
    userName: 'john',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}

// fn 에 user.greet 을 할당하라.
//       greet의 this 엔 user가 담겨있다.
fn = user.greet.bind(user)  //16번 줄의 user에 greet 만 사용하겠단 뜻이다.
setTimeout(fn, 200)

console.log(fn == user.greet)
