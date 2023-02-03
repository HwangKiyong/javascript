const greeting = 'hello'
//function을 사용하는 순간 local scope가 생긴다.
function say(userName) {    //say 는 global scope
    console.log(greeting, userName) //local scope
}

say('john')