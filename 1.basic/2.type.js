let foo = "I am a string."
foo = 'So am I'
foo = `back tick` // esc밑 키 

foo = 'He said, "javascript is awesome"'
foo = "He said, \"javascript is awesome\""

foo = 1
foo = 1.0
//log 터미널에 출력
console.log(1 / 0)// Infinity는 값이다 오류x
console.log('a' / 1)// NaN: Not a Number  '숫자가 아니다' 라는 값이다 ,
//string과 number가 같이 사용되면 string을 number로 바꾼다.
//ex) 꽥꽥거리니까 오리이다  (오리니까 꽥꽥거린다 x)
foo = 1 //duck type 1을 담앗기때문에 number  
console.log(isFinite(foo))//isFinite foo변수의 데이터 타입을 조사한다
foo = 'a' //duck type a을 담앗기때문에 String 
console.log(isFinite(foo))

foo = '1'
console.log(parseInt(foo) + 1)//parseInt int type으로 취급되는 변수로 바꿈

foo = 'a'
foo = '100px'
foo = '+1'
foo = '-1'
foo = '123456-7890123'
console.log(parseInt(foo))

foo = '1.6'//내림처리한다
console.log(parseInt(foo))
console.log(parseFloat(foo))

let a = Infinity * 2// Infinity ( 0 * 2)와 같다 Infinity
let b = NaN * 2

a = Infinity * NaN // NaN 이 더쌤 
console.log(a, b)

foo = 1n //2**53 -1 초과 big int 16초과하려면 n 붙여 

const okay = true
const fail = false

let val = null

let val2
console.log(val2) //undefined 기본값으로 undefined이 할당된다
val2 = undefined//직접 할당할수도있다

let id = Symbol('id') // Symbol 이라는 type의 값을 return
console.log(typeof id)

val = 1
val = String(val)//String type의 값을 return
console.log(typeof val)

val = '6' / '2'
console.log(val)

val = false / true
console.log(val)

val = '1'
val = Number(val)
console.log(typeof val)

console.log(Number('1'), Number(true))
console.log(Number(' '), Number(''), Number(null), Number(false))// 모두 0으로 처리
console.log(Number('a'), Number(undefined), Number(NaN))
//true 가 1 false 가 0이다.
console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' '))//값이 있으니까 true
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN))
//Boolean(undefined) 가 false라는것은 기억해야된다
