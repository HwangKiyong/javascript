function sayHi(){
    console.log('Hi')
}

setTimeout(sayHi, 1000)//(function , 시간(sec))시간 후에 function 실행

function greet(phrase, who){
    console.log(phrase, who)
}

setTimeout(greet, 2000, 'hello', 'knox')

let timeId = setTimeout(() => console.log('hoo'), 3000)
clearTimeout(timeId)
