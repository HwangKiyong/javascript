let obj = {} //new object 생성자를 짧게 줄여서 쓴것이다.
//obj 생성자이다.
console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype) //true

obj = new Object() //첫번째 줄에는 6번을 줄여서 쓴것이다.
console.log(obj.__proto__)
console.log(Object.prototype.__proto__) //Object 클래스가 최상위 클래스이다.

console.log(obj.toString()) //String으로 변경해줌

let arr1 = [1, 2]   //13번을 줄여서 쓴것이다.
let arr2 = new Array(1, 2)
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)

console.log(Array.prototype.__proto__) //Array의 prototype은 Object이다.
console.log(Object.prototype) //꼭대기 Object 그밑에 Array가 있다.
console.log(Array.prototype.__proto__ == Object.prototype)
console.log(arr2.toString())

let one = new Number(1)
console.log(one.toString())

function User() {}
let user = new User()
console.log(user.toString())
console.log(obj.toString())
