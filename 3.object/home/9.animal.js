/*
다음 상속 관계로 객체를 디자인하라.
<life>
name
eat()
excrete()

<animal>
name
move()

<bird>      <mammal>
name        name
move()      move()
--

실행코드
bird.eat()
bird.excrete()
bird.move()

mammal.eat()
mammal.excrete()
mammal.move()
--

결과
bird eat.
bird excrete.
bird fly.
mammal eat.
mammal excrete.
mammal run.
*/
let life = {
    name: 'life',
    eat() {
        console.log(this.name, 'eat. ')
    },   
    excrete() {
        console.log(this.name, 'excrete. ')
    }
}

let animal = {
    name: 'animal',    
    move: {},
    __proto__: life
}

let bird = {
    name: 'bird',
    move() {
        console.log(this.name, 'fly. ')
    },
    __proto__: animal 
}

let mammal = {
    name: 'mammal',
    move(){
        console.log(this.name, 'run. ')
    },
    __proto__: animal
}

bird.eat()  //life 상속
bird.excrete()  //life 상속
bird.move() //animal 상속

mammal.eat()    //life 상속
mammal.excrete()    //life 상속
mammal.move()   //animal 상속