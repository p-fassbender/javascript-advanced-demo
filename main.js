// NESTED FUNCTION SCOPE
// let a = 10
// function outer() {
//     let b = 20
//     function inner() {
//         let c = 30
//         console.log(a, b, c)
//     }
//     inner()
// }
// outer()

// CLOSURE
// function outer() {
//     let counter = 0
//     function inner() {
//         counter++
//         console.log(counter)
//     }
//     return inner
// }
// const fn = outer()
// fn()
// fn()

// CURRYING
// function sum(a, b, c) {
//     return a + b + c
// }
// console.log(sum(2, 3, 5))

// function curry(fn) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return fn(a, b, c)
//             }
//         }
//     }
// }

// const curriedSum = curry(sum)
// console.log(curriedSum(2)(3)(5))

// const add2 = curriedSum(2)
// const add3 = add2(3)
// const add5 = add3(5)
// console.log(add5)

// this KEYWORD
// function sayMyName(name) {
//     console.log(`My name is ${name}.`)
// }
// sayMyName('Ash')
// sayMyName('Oak')

// const person = {
//     name: 'Gary',
//     sayMyName: function () {
//         console.log(`My name is ${this.name}.`)
//     },
// }
// person.sayMyName()

// function sayMyName() {
//     console.log(`My name is ${this.name}.`)
// }
// sayMyName.call(person)

// function Person(name) {
//     this.name = name
// }
// const p1 = new Person('Surge')
// const p2 = new Person('Brock')
// console.log(p1.name, p2.name)

// sayMyName()

// PROTOTYPE
// function Person(fName, lName) {
//     this.firstName = fName
//     this.lastName = lName
// }

// Person.prototype.getFullName = function () {
//     return this.firstName + ' ' + this.lastName
// }

// function Rapper(fName, lName) {
//     Person.call(this, fName, lName)
//     this.isRapper = true
// }
// Rapper.prototype.makeMusic = function () {
//     console.log('Making music')
// }
// Rapper.prototype = Object.create(Person.prototype)
// Rapper.prototype.constructor = Rapper

// const person1 = new Person('Ice', 'Cube')
// const person2 = new Person('Dr.', 'Dre')
// const snoop = new Rapper('Snoop', 'Dogg')

// console.log(person1.getFullName())
// console.log(person2.getFullName())
// console.log(snoop.getFullName())

// CLASS
// class Person {
//     constructor(fName, lName) {
//         this.firstName = fName
//         this.lastName = lName
//     }
//     sayMyName() {
//         return this.firstName + ' ' + this.lastName
//     }
// }

// const classP1 = new Person('Ice', 'Cube')
// console.log(classP1.sayMyName())

// class Rapper extends Person {
//     constructor(fName, lName) {
//         super(fName, lName)
//         this.isRapper = true
//     }
//     makeMusic() {
//         console.log('Making music')
//     }
// }

// const snoop = new Rapper('Snoop', 'Dogg')
// console.log(snoop.sayMyName())

// ITERABLES AND ITERATORS
// const obj = {
//     [Symbol.iterator]: function () {
//         let step = 0
//         const iterator = {
//             next: function () {
//                 step++
//                 if (step === 1) {
//                     return { value: 'Hello', done: false }
//                 } else if (step === 2) {
//                     return { value: 'World', done: false }
//                 }
//                 return { value: undefined, done: true }
//             }
//         }
//         return iterator
//     }
// }
// for (const word of obj) {
//     console.log(word)
// }

// GENERATORS
function normalFunction() {
    console.log('Hello')
    console.log('World')
}
normalFunction()
normalFunction()

function* generatorFunction() {
    yield 'Hello'
    yield 'World'
}
const generatorObject = generatorFunction()
for (const word of generatorObject) {
    console.log(word)
}