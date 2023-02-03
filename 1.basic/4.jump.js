//제어문
if(true) {}

if(false) {} else {}
//if가 false면 else구문으로 간다
if(undefined) {console.log(1)}
if(null) {console.log(2)}
if(0) {console.log(1)}

if(-1) {console.log(1)}

console.log(true ? 1 : 0)

let val 

switch('boo'){
    case 'bar': val = 'bar'; break
    case 'baz': val = 'baz'
    default: val = 'all right'
}

console.log(val)