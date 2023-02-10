let promise = new Promise((resolve, reject)=> 
    setTimeout(() => reject('hello'), 1000))
console.log(promise)

setTimeout(() => console.log(promise), 1100)

promise.catch(result => console.log(result))

//
promise = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('world')), 2000))

promise.then(result => console.log(1),  //resolve 상태일때 작동
            result => console.log(result))  //reject 상태일때 작동

//
promise = new Promise((resolve, reject) =>
    setTimeout(() => {throw new Error('king')}, 3000)) 

promise.catch(console.log)