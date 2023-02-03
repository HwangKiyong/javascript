const age = 16  //global

console.log(sayAge) //undefined의 뜻이 그런변수 없단 뜻이다.

{
    let age = 10

    function sayAge() {
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()
}       //local
