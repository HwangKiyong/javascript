console.log(Date()) //현재 시간을 return 한다.
console.log(typeof Date()) //return 값 type은 string

let date = new Date()
console.log(date)
console.log(typeof date)    //date type은 object
console.log(date.toLocaleDateString())  //오늘날짜를 출력

date = new Date('2023-02-10T01:37:30.999Z') //utc시간을 적은것이다.
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())  //현재 시간을 나타내기 위해선 -9를 해야한다.

console.log(
    date.getFullYear(), //연도를 나타낸다.
    date.getMonth(),    //월을 나타낸다.
    date.getDate(),     //일을 나타낸다.
    date.getUTCHours(),  //UTC시간을 표기한다.
    date.getHours(),
    date.getMinutes(),   //분 을 나타낸다.
    date.getSeconds(),   //초를 나타낸다.
    date.getMilliseconds(),
    date.getDay()   //요일을 나타낸다.
)

console.log(date.getTime()) //timestamp
console.log(Date.now())

date = new Date(0)  //기준
console.log(date)

date = new Date(1000 * 60 * 60 * 24)
console.log(date)

date = new Date(-1000 * 60 * 60 * 24)
console.log(date)