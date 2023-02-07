function makeFn(){
    let userName = 'parker'

    function displayUserName(){
        console.log(userName)
    }

    return displayUserName
}

let myfn = makeFn()

myfn()