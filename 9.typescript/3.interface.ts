interface Profile { //interface는 데이터타입을 만들어내는것이다.
    userId: number
    userName: string
    nickName: string
}

function printUserName(profile: Profile) {
    console.log(profile.userId)
}

const profile: Profile = {
    userId: 1,
    userName: 'cain',
    nickName: 'hero'
}

printUserName(profile)
console.log(typeof profile)

//
interface Relationship {
    from: Profile
    to: Profile
}

const relationship: Relationship = {
    from: {
        userId: 1,
        userName: 'cain',
        nickName: 'hero'
    },
    to: {
        userId: 2,
        userName: 'able',
        nickName: 'warrior'
    }
}

//
interface Account extends Profile {
    email: string
    password: string    
}

const account: Account = {
    userId: 1,
    userName: 'cain',
    nickName: 'hero',
    email: 'cain@gmail.com',
    password: 'cainpw'
}

//
interface User {
    userId: number
    userName: string
    photoUrl?: string   //없어도 된다는 '?'로 표현한다.
}

let user: User = {
    userId: 1,
    userName: 'able',
    photoUrl: 'face.jpg'
}

console.log(user) // {userId: 1, userName: 'able', photoUrl: 'face.jpg' }

user = {
    userId: 2,
    userName: 'abel'
}

console.log(user)

//
interface Shape {
    getArea(): number
    getPerimeter(): Number
}

class Circle implements Shape {
    constructor(private radius: number) {}

    getArea() {
        return Math.PI * Math.pow(this.radius, 2)   //pow는 제곱수를 구하는것이다.
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    getArea(): number {
        return this.width * this.height
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height)
    }
}

const circle = new Circle(4)
const rectangle = new Rectangle(4, 6)

console.log(circle.getArea(), rectangle.getPerimeter())