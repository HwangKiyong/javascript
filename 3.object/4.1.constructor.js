let makeUser = function(userName, age){
    return{
        userName: userName,
        age: age
    }
}

makeUser = function(userName, age){
    return{
        userName,//중복되면 생략가능
        age
    }
}

console.log(makeUser('doris', 57))

function User(userName){
    //this = {} //직접 쓰면 안댐
    this.userName = userName
    this.greet = () => console.log(`I am ${this.userName}.`)
    //return this  생략가능 
}

let user1 = User('bob')//생성자로써 쓰는게 아니다 function으로쓴거
user1 = new User('bob')// new 를 붙여야 객체 생성이다

console.log(user1)

user1.greet()
console.log(Object.keys(user1))

const user2 = new User('sarah')
user2.greet()

let str = String(1)
console.log(typeof str)

str = new String(1)
console.log(typeof str)

let human = new function(){
    this. humanName = 'meg'
    this.age = 27
}
console.log(typeof human, human.humanName)

function BigUser(){
    this.userName = 'amy'
    return {userName: 'beth'}
}

function SmallUser(){
    this.userName = 'lorie'
}

//과제: new를 쓰지 않고, SmallUser().userName 을 고쳐서, error 가 발생하지 않도록 하라.
console.log(BigUser().userName, SmallUser()?.userName)

const user = new Object()
console.log(user)
user.age = 12
// view object 
const person = Object.create(user)
console.log(person)
console.log(person.age)
console.log(person == user)

person.personName = 'mandarin'
console.log(user)