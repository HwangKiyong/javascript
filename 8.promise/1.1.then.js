let promise = new Promise((resolve, reject) =>
    setTimeout(() => resolve('hello'), 1000))
console.log(promise)

setTimeout(() => console.log(promise), 1100)

promise.then(result => console.log(result))