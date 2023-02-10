let set = new Set()

let user1 = {userName: 'john'}
let user2 = {userName: 'pete'}

set.add(user1).add(user2).add(user1)
console.log(set)    //알아서 중복제거를 한다.

//
console.log(set.size)   //원소갯수 확인
console.log(set.has(user1), set.has(user2), set.has({}))

//
console.log(set.delete(user1))
console.log(set)

set.add(user1)

for(let user of set) console.log(user)

set.forEach(val => console.log(val))

//
set = new Set([1, 2, 3])
console.log(set)

set = new Set('hello')
console.log(set)

let arr = Array.from(set)   //set을 Array로 변환
console.log(arr)

//arr 는'push'map 은 'set'  set은 'add'로 데이터를 추가한다.