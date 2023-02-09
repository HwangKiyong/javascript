let map = new Map()

map.set('1', 'hello')
map.set(1, {userName: 'david'})
map.set(true, function fn() {})

console.log(map.get('1'), map.get(1), map.get(true))    //map을 사용할때는 key를 사용하면된다.
console.log(map.has('1'), map.has(1), map.has(true), map.has(false))    //has는 map의 키를 확인할때 사용한다.
console.log(map.size)   //length와 size는 유사하다. map에서는 size로 조회한다.

console.log(map.delete(1), map.delete(2))   //delete 성공하면 true 실패하면 false
console.log(map)

map.clear()
console.log(map)

//
map = new Map()
map.set(1, 'amella').set(2, 'avery').set(3, 'adela')
console.log(map)

// iterable object 
let greens = new Map([
    ['cucumer', 500],
    ['tomato', 350],
    ['onion', 50]
])

for(let entry of greens)
    console.log(entry)

let keys = greens.keys()
console.log(keys)

for(let key of keys)
    console.log(key)

let values = greens.values()
console.log(values)
for(let value of values) console.log(value)

greens.forEach((val, key) => console.log(key, val))

//
let user = {
    userName: 'aiden',
    age: 50    
}

let entries = Object.entries(user)
console.log(entries)
console.log(new Map(entries))   //Object를 map 으로 리턴하는법

//
map = new Map()
map.set('apple', 1)
map.set('orange', 2)
map.set('pear', 3)

let fruits = Object.fromEntries(map)    //map을 Object로 리턴하는법
console.log(fruits)