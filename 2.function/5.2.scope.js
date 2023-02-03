let a = 1
// let a 변수명의 중복 여부는 scope별로 판단한다.
{
    console.log(a)
} 

{   //local scope
    let a = 2
    //let a    변수명의 중복 여부는 scope별로 판단한다.
    console.log(a)  //local scope이기에 2가 출력된다.
}   

console.log(a) // global scope이기 때문에 맨위에서 지정한 1이 출력된다.