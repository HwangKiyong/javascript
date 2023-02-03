/*
산술 연산 함수를 만든다.

1. (값1, 값2, 연산자)가 parameter 이다.
2. parameter value 들은 string type 이다.
3. 연산자는 -, *, / 로 한정한다.
4. client가 연산자를 안 정하면, * 를 연산자로 쓴다.
5. 연산 결과값을 return 한다.
*/
let calculate = function(a, b, op = '*') {
    let result //result에는 undefined 값이 들어가있다.

    switch(op) {
        case '-' : result = a - b; break
        case '*' : result = a * b; break
        case '/' : result = a / b;
    }

    return result
} 

console.log(calculate('1', '2', '-'))
console.log(calculate('2', '2'))