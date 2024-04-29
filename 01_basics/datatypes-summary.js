// Stack and Heap in JS
// How memory work in js

// let myName = "Pankaj";
// let myAnotherName = myName
// console.log(myAnotherName);
// console.log(myName);
// myAnotherName = "Prashant"
// console.log(myAnotherName);

let userOne = {

                name : "Pankaj",
                email : "theshantpreneur@gmail.com"

                }

let userTwo = userOne;
console.log(userTwo)

userTwo.name = "Prashant";
console.log(userTwo)

console.log(userOne)