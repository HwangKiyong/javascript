type Man = {
    manName: string
}
//interface와 type의 차이점은 =이 있다 없다이다.
const man: Man = {
    manName: 'john'
}

type Men = Man[]    //별명을 붙이는것이다.
const men: Men = [{manName: 'neo'}]

type Color = 'red' | 'green' | 'blue'   //타입을 지정해주면 그 변수만 들어갈수 있다.
let color: Color = 'red'
// color= 'yellow'

type Employee = Man & {
    job: string
}

const employee: Employee = {
    manName: 'berg',
    job: 'programmer'
}