let arr = ['ilya', 'kantor']
let [firstName, lastName] = arr
console.log(firstName, lastName)

let [one, two] = [1, 2, 3]  //변수와 원소갯수가 맞지않으면 맞지않는건 자동으로 버린다.
console.log(one, two)

let [three, four] = [3]
console.log(three, four)    //3과 undefined 가 출력된다.

let [one2, , three2] = [1, 2, 4]
console.log(one2, three2)

//
let s = 'i am'
let [a, b, c] = s
console.log(a, b, c)

//
arr = s.split(' ')    //split 쪼갠다란 뜻이다.
console.log(arr)
//join 과 split 은 음 양으로 사용하면 된다.
let [a2, b2] = arr
console.log(a2, b2)

let [a3, b3] = new Set(arr)
console.log(a3, b3)

//
let user = {
    userName: 'oscar',
    age: 6
}

let entries = Object.entries(user)
console.log(entries)

for(let [key, val] of entries)
    console.log(key, val)

//
let map = new Map([
    ['userName', 'oscar'],
    ['age', 6]
])

for(let [key, val] of map)
    console.log(key ,val)

//
let [x, y, ...rest] = [1, 2, 3, 4]
console.log(x, y, rest)

//
let [x2, y2 = 10] = [1]
console.log(x2, y2)

//
let options = {
    title: 'menu',
    width: 100,
    height: 200
}

let {title, height, width} = options
console.log(title, height, width)

let {width: w, height: h} = options
console.log(w, h)   //w,h변수를 별도로 선언한것이다.

let {title: t, ...other} = options
console.log(t, other)

let {title: subject, wide = 10} = options
console.log(subject, wide)

//
let bread = {
    size: {
        width: 100,
        height: 200
    },
    items: ['cake', 'donut'],
    extra: true
}

//과제: bread 에서 size와 items를 뽑아라.
// let {size, items} = bread
// console.log(size, items)

//
let {
    size: {
        width: w2,
        height: h2
    },
    items: [item1, item2]
} = bread
console.log(w2, h2, item1, item2)

//
let menu = {
    title: 'menu',
    items: ['list', 'add'],
    expired: 10
}

function showMenu({title: t, items:[i1, i2]}) {
    console.log(t, i1, i2)
} 

showMenu(menu)  //108~112 번줄 자주 사용하는 기법이다.