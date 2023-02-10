let range = {
    from: 1,
    to: 3,

    [Symbol.iterator]() {
        this.current = this.from
        return this
    },

    next() {
        if(this.current <= this.to)
            return {
                done: false,
                value: this.current++
            }
        else 
            return {
                done: true  //iterating 이 done됬다
            }
    }
}

for(let num of range)
    console.log(num)

function* generator() { //generator를 생성하는 방법은 function* 이다.
    let val = 1
    while(val <= 3) yield val++ //yield는 generator 사용할때 return을 뜻한다.
}
//generator 에는 function* , yield 가 꼭 있어야한다.
for(let num of generator())
    console.log(num)

let g = generator()
console.log(g, ',', typeof g)

//
function* gen() {
    yield 1
    yield ['a', 'b']
    yield function(){}
}

for(let val of gen())
    console.log(val)

function* gen2() {
    yield* generator()
    yield* ['a', 'b']   //generator 안에 generator를 넣는 효과가 발생된다.
    yield 9
}

for(let val of gen2())
    console.log(val)    