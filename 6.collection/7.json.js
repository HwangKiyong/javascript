let user = {
    userName: 'kelly',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css'],
    wife: null 
}

let json = JSON.stringify(user)
console.log(json)

//
user = {
    userName: 'jessie',
    room: {
        roomNumber: 23,
        participants: ['john', 'ann']
    },
    greet() {
        return 'hello'
    },
    [Symbol('id')]: 123,
    color: undefined
}

console.log(JSON.stringify(user))   //메소드 밑으로는 다 버린다.

//
let room = {
    roomNumber: 23
}

let meetup = {
    title: 'conference',
    room
}

console.log(JSON.stringify(meetup))

room.toJSON = function() { return this.roomNumber }
let s = JSON.stringify(meetup)
console.log(s)

// parsing
user = JSON.parse(json) //JSON 을 Object타입으로 파싱한다.
console.log(user)
console.log(typeof user)