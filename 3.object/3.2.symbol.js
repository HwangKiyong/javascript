let age
function src(){
    let user = {
        userName: 'amanda'
    }

    a(user)
    b(user)
}

function a(user) {
    user[Symbol('age')] = 12    //sybol키를 사용하는 이유는 감추기 위해서이다.
    console.log(user)
}

function b(user){
    console.log(Object.keys(user))
    console.log(user.userName)
    console.log(user)
}

src()