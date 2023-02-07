/* symbol: unique identifier */
let id = Symbol()   //Symbol을 function으로 call한다.
let id1 = Symbol('id')//파라미터는 설명문, String으로 변환되서 출력
let id2 = Symbol('id') //id값은 Symbol 을 리턴한다.

console.log(id, id1, id2)

console.log(id1 == id2)//유일한 값이면 거짓

console.log(id.toString())
console.log(typeof id)

console.log(id1.description, id2.description, id.description)

let user = {
    userName: 'neo'
}

let userId = Symbol('userId')   
user.userId = 1
user[userId] = 2

console.log(user)

//과제: user 를 iterating 해서, key 들을 출력하라.
for(let key in user) console.log(key)//Symbol을쓰는이유 감추기위해

console.log(Object.keys(user))

id1 = Symbol.for('regNo')//'id'가 key가 된다 , for로 만든 symbol 은 global symbol이다.
id2 = Symbol.for('regNo')
console.log(id1 == id2) 

let key = Symbol.keyFor(id1)
console.log(key, typeof key)

id1 = Symbol.for('regNo')//global Symbol
id2 = Symbol('regNo')//local Symbol
console.log(id1 == id2)

console.log(Symbol.keyFor(id1), Symbol.keyFor(id2))