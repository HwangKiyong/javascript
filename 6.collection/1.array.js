let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr)

arr = [null, undefined, NaN]
console.log(arr)

arr = []
arr[0] = 'a'
arr[2] = 'c'

console.log(arr)
console.log(arr[0])
console.log(arr[1])

console.log(arr.length) //undefined 도 값으로 취급한다

let matrix = [
    [1, 2],
    [3, 4]
]

let a = [1, 2]
let b = [2, 3]
let c = a.concat(b)
console.log(c)

arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.pop())  //pop 제일 마지막 들어온것을 출력후 제거한다. java remove랑 비슷하다.
console.log(arr)


arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.shift())    //shift 제일 먼저 들어온것을 출력후 제거한다.
console.log(arr)

arr = [1, 2, 3]
arr.reverse()   //역순으로 나온다.
console.log(arr)

a = [0, 1, 2]
b = a.slice(1)  //index 포함 이후의 새로운 배열을 만들어낸다.
console.log(b, a)

arr = [0, 7, 8, 5]
arr.splice(0, 2, 1, 2, 3, 4)
console.log(arr)

arr = ['a' , 'b', 'c']
console.log(arr.indexOf('b')) 

arr.splice(arr.indexOf('b'))
console.log(arr)

arr = ['a', 'b', 'c']
//과제: splice()로 arr 에서 'b'만을 삭제하라.
arr.splice(arr.indexOf('b'), 1)    //splice(시작, 짜를원소)
console.log(arr)

arr = ['a', 'b', 'c', 'b']
arr.splice(arr.indexOf('b'), 1)
console.log(arr)

//
arr = [4, 3, 1, 2]
let s = arr.sort()  //sort 오름차순
console.log(arr, s)
//과제: s가 view object 인지를 확인하라..
console.log(s == arr)

arr = [8, 11, 22, 23, 9]
console.log(arr.sort()) //string으로 처리되어 unicode순으로 정렬한다.

console.log(arr.sort((a, b) => a - b))  //오름차순
console.log(arr.sort((a, b) => b - a))  //내림차순

arr =['a', 'b', 'c']

for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

// 과제: 위와 다른 for로 arr iterating 하라.
for(let e of arr) console.log(e)    //collection으로 접근한것
for(let key in arr) console.log(arr[key])   //객체로 접근한것

function print(e) {
    console.log(e)
}   //callback

function print2(e, i) {
    console.log(`[${i}]: ${e}`)
}

function print3(e, i, arr) {
    arr[i] = e.toUpperCase()    //대문자로 바꾼다
}

arr = ['a', 'b']

console.log()
arr.forEach(print)

arr.forEach(print2) //출력 목적으로 사용하면된다.

arr.forEach(print3)
console.log(arr)

//
arr = [1, 2, 3]
let arr2 = arr.map(e => e * 2)  //객체를 태그로 변경할때 사용
console.log(arr, arr2, arr == arr2)

//
let group = {
    title: 'art',
    students: ['winston', 'cal', 'maritha'],
    list() {
        this.students.forEach(studentName =>
            console.log(this.title, ':', studentName))
    }
}

group.list()

// 잘기억해둘것 join() hr.jquery에 사용할것
arr = ['hello', 'world', 2]
let greeting = arr.join()
console.log(greeting, typeof greeting)

console.log(arr.join('/'))
//과제: arr.join() 에서 'helloworld2' 를 return 하라.
console.log(arr.join(''))

//
arr = [1, 2, 3]
str = arr.toString()
console.log(str, typeof str)

//
str = String(arr)
console.log(str, typeof str)

//
str = JSON.stringify(arr)
console.log(str, typeof str)

//
const items = [
    {itemName: 'book', price: 1},
    {itemName: 'computer', price: 100},
    {itemName: 'book', price: 2}
]

const item = items.find(item => item.itemName == 'book')
console.log(item)   //find의 사용법은 callback에서 true가 나오는것을 return한다, 첫번째만 골라내고 끝난다.

//
const interest = items.filter((item, i) => item.itemName == 'book') 
console.log(interest)   //find와 차이점은 all 찾아낸다.

// 적극 활용할것
const elements = items.map((item, i) => 
    `<div>${item.itemName}: ${item.price}</div>`)
console.log(elements)

//
const totalPrice = items.reduce((total, item) => {
    total += item.price
    return total
}, 0)
console.log(totalPrice)

//
let isExit = items.some(item => item.itemName == 'book')    //some은 한가지만이라고 true면 true다
isExit = items.every(item => item.itemName == 'book')   //every는 모든 원소가 다 true여야 true이다.
console.log(isExit)