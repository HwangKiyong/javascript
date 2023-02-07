const age = 16  //global

console.log(sayAge)     //undefined의 뜻이 그런변수 없단 뜻이다.

{
    let age = 10

    function sayAge(){//closure 외부 변수의 접근 할 수 있는 function
        console.log(age)
    }

    let tellAge = function(){
        console.log(age)
    }

    sayAge()    //local
    tellAge()
}

sayAge()    