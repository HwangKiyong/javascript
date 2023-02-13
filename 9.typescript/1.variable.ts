let msg: string = 'hello'
// msg = 1  js 와 ts 의 차이는 변수의 타입을 정하는지 아닌지의 차이다.
//ts는 static variable타입 js 는 dynamic variable타입
let val: number = 1
let nullableStr: string | null = null
nullableStr = 'Hi'
// nullableStr = undefined

let undefinedOrNumber: undefined | number
undefinedOrNumber = 10
undefinedOrNumber = undefined

let numberOrStringOrNull: number | string | null = null
numberOrStringOrNull = 1
numberOrStringOrNull = 'Bye'

let isCompleted: boolean = true
isCompleted = false
// isCompleted = 0

let anyValue: any = null
anyValue = undefined
anyValue = 1
anyValue = 'hello'

let a = 1       //number 타입
let b = 'b'     //string  타입
let c = true    //boolean 타입