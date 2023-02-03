let val = 1 + 2 * 3 / 2
console.log(val, 5 % 2, 4 ** 2, 4 ** (1/2))// 4**2는 4의 2승, 4 ** (1/2))는 root
let i = 1
console.log(++i, i++)
//---붙이기 '+연산자'
let foo = 'hello'
let bar = 'world'
console.log(foo + ' ' + bar)
console.log(1 + '2', '1' + '2')//'+연산자'는 피연산자중 1개라도 String 이면 String 

console.log(1 + +'2')//String값에 +붙이면 number로 변경된다.
//마지막에 읽은 값을 return
console.log(1 || 0, 0 || 1) 
console.log(1 && 0, 0 && 1)
console.log(1 && 2, 2 && 1)

//if(foo == true) a논리     java style
//foo && A논리      java script style
//bar = baz || createBar()  java script style

console.log()// 줄바꿈
let c = 3 - (a = 1 + 2)// 가독성 떨어진다
console.log(c)

let d = 2
d *= 2  //복합 할당 연산자
console.log(d)
//number 아닌게 있으면 number로 변환
console.log()
console.log('2' > 1, '01' == 1, false == 0, '0' ==0, '' == false)
console.log(true > 1)// boolean 이 number로 변환

console.log(1 == '1', 1 != '1') //equivalent 논리적관점
console.log(1 === '1', 1 !== '1') // identical  === 는 date type 까지 신경쓴다, 물리적관점

console.log('z' > 'a', 'ac' > 'ab', 'bee' > 'be', 'a' > 'A')

console.log(null > 0, null >= 0, null == 0)// 예외 'null == 0' 는 false 
console.log(undefined > 0, undefined >= 0, undefined == 0)//값이 없다는 undefined 이용
console.log(NaN > 0, NaN >= 0, NaN == 0)

console.log(undefined == undefined, null == null, NaN == NaN)

a == b 
a == 1
1 == a
