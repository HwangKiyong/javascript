let promise = new Promise((resolve, reject) => setTimeout(() => resolve(10), 1000))

promise.then(console.log(1))   //1
        .then(console.log(2))   //2

promise.then(result => {
    console.log(result)
    return ++result
}).then(result => {
    console.log(result)
    return ++result
}).then(console.log)

//
promise = new Promise((resolve, reject) => 
    setTimeout(() => resolve('complete'), 2000))

promise.then(console.log)
    .then(console.log('one'))
    .catch(e => console.log(e.message)) //then 이 에러일시 catch가 실행됨
    .finally(() => console.log('finally'))  //finally는 무조건 실행됨