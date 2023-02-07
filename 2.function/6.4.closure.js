function makeConter(){
    let count = 0

    return function(){
        return ++count
    }
}

let counter1 = makeConter()
let counter2 = makeConter()

for(let i = 0; i < 2; i++)
    console.log(counter1())

for(let i = 0; i < 2; i++)
    console.log(counter2())

    