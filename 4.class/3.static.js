class Article {
    static publisher = 'ddanzi'

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) {
        return article1 - article2
    }

    [Symbol.toPrimitive](hint) { 
        return hint == 'string' ? this.title : this.viewCnt
    }   //serializing
    /*
    toString() {
        return this.title
    }

    valueOf() {
        return this.viewCnt
    }
    */
}
//static 은 데이터와 메소드 둘다 붙을수 있다.
console.log(Article.publisher)

Article.address = 'seoul'
console.log(Article.address)

Article.getPrice = () => 2000
console.log(Article.getPrice())

//
let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1, article2))

//
console.log(`${article1}`)
console.log(article1 + '')

//
console.log(article1.publisher, article2.publisher, article1.compare)
console.log(Article.title, Article.viewCnt)

console.log(Object.keys(Article))   //static property들이다.
console.log(Article.prototype)
console.log(Object.keys(article1))
//static property 는 class 안으로 들어간다.

let articles = [article1, article2]
console.log(articles)

articles.sort((a, b) => a - b) //오름차순 정렬
articles.sort((a, b) => b - a) //내림차순 정렬
console.log(articles)