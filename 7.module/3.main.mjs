import {greet, add} from './1.named.mjs'    //./파일명
import * as named from './1.named.mjs'
import div from './2.default.mjs'
//react에서는 import가 필수이다.
console.log(greet, add(1, 3))
console.log(named.greet, named.add(1, 2))

console.log(div(4, 2))