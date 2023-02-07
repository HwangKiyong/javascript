let user1 = {
    userName: 'isabel',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}

let user2 = {
    userName: 'jade',
    greet(){
        console.log(`I am ${this.userName}.`)
    }
}

user1.greet()
user2.greet() //주어객체(접두사)가 user2이기때문에 jade가 call된것이다.

//
let userName = 'morpheus'

function greet() {
    console.log(`I am ${this.userName}`)
}

greet() //앞에 접두사로 global이 생략된것이다.
greet.call(user1)
greet.call(user2)

//
user2 = {
    userName: 'colin'
}

user1.greet()
// user2.greet()

// 과제: user1.greet 을 이용해서, I am colin을 출력하라.
user1.greet.call(user2)