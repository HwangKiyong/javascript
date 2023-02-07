let user = {}

user.height = 200
user['weight'] = 80

console.log(user.height, user.weight)

delete user.weight
console.log(user.weight)

console.log('height' in user)//height가 user 안에잇는지 있으면 true
console.log('weight' in user)

for(let key in user) console.log(user[key])

user.userName = 'parker'
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

user = {
    greet: function(){console.log('hello')}
}

//과제: 위 코드를 arrow function 으로 refactoring 하라.
user = {
   greet: () => console.log('hello')
}

user = {
    greet(){
        console.log('hello')
    }
}

user.greet()

/*optional chaining */
user = {}
let address = {}
user.address = address
address.street = 'sejong'
console.log(user.address.street)
//console.log(user.city.cityName)
console.log(user.city?.cityName)//?를 붙이면 undefined를 return 하고 끝냄 앱을 죽지않게함

let street
//street = user.city.street
street = user?.city?.street
console.log(street)

street = user?.city?.street ?? 'where'//??는 return 값을 지정할수있다
console.log(street)

//user?.address = 'sejong'
//undefined 값이없다, 해당 변수가 없다   null 값이 없다
user = null
//user.greet()
user?.greet()

user = {}
//user.greet()
console.log(user.greet?.())//user 객체 안에  greet이라는 function이 있나 체크