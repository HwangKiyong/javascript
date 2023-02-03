function add(a, b) {
    return a + b 
}

console.log(add(1, 2, 3))
//남는 parameter는 javascript에서 알아서 버린다.

add = function(...arg) {
    let tot = 0
    for(let arg of arguments) tot += arg //iterating이다.
    return tot 
}//남는 parameter를 표현하는것은 ...arg 이다. 배열이다.

console.log(add(1),add(1, 2, 3))

function printName(firstName, lastName, ...titles) {
    console.log(firstName, lastName)
    console.log(titles[0], titles[1], titles[2])
    console.log(titles.length)
}

printName('adam', 'smith', 'operator', 'consul')

function showName() {
    console.log(arguments.length)
    console.log(arguments[0], arguments[1])
}

showName()
showName('erica', 'terry')

// spread (...)을 사용해야한다.
console.log(Math.max(1, 2, 3))

let arr = [1, 2, 3]
console.log(Math.max(arr))
console.log(Math.max(...arr))

let arr2 = [4, 5, 6]
console.log(...arr2)
/* 과제:위 코드를 ...를 안쓰는 걸로 refactoring 하라.*/
console.log(arr2[0], arr2[1], arr2[2])

console.log(...arr, ...arr2)
console.log(Math.max(...arr, ...arr2))
console.log(Math.max(0, ...arr, 7, ...arr2, 8)) //spread를 써도 다른 것을 써도된다.

// x = {a, b}
// {...x, c} react에서 객체 복제하는것이다.
arr = [0, ...arr2, 9]
console.log(arr)
