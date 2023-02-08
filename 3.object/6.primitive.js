//object를 casting
let date1 = new Date(2023, 2, 7)
let date2 = new Date(2023, 2, 6)

console.log(date1 - date2)

let user = {    //현재의 방식
    userName: 'amanda',
    age: 20,    
    [Symbol.toPrimitive](hint) {    //Symbol타입의 key는 []안에 작성하면된다.
        return hint == 'string' ? this.userName : this.age
    }
}

let user2 = {
    age: 30,
    [Symbol.toPrimitive]() {
        return this.age
    }
}

console.log(`${user}`)
console.log(user > user2)   //hint 값으로 default 값이 넘어온다.
console.log(user + 50)
console.log(user2 + 50)

user = {    //과거의 방식
    userName: 'neo',
    age: 11,
    toString() {
        return this.userName
    }
}

console.log(user + '')

user.valueOf = function() {
    return this.age
}
console.log(user + 100)

//
userStr = JSON.stringify(user) //JSON 형태의 문자로 바꿔준다. , JSON의 타입은 String이다.
console.log(userStr)
console.log(typeof userStr)