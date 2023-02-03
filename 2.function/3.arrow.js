//arrow function
let add = function(a, b) {
    return a + b
}

add = (a, b) => a + b
//위와 아래 뜻이 같다 아래가 arrow function이다.
console.log(add(1, 2))

const double = n => 2 * n   //리턴이 생략되었다.
console.log(double(2))

const greet = () => console.log('hello') //리턴을 안한다.
greet()
//arrow function은 리턴을 생략한다.
add = (a, b) => {
    const result = a + b
    return result
}
console.log(add(1, 2))