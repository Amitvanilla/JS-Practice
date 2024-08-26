"use strict";
console.log(child) //undefined
var child = "xyz"
console.log(child)


// console.log(child) //error
// let child = "xyz"
// console.log(child)\

console.log(myVar); // Output: undefined
var myVar = 'Hello';

myFunction(); // Output: "Hello from function"

function myFunction() {
    console.log('Hello from function');
}

//Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the
// compilation phase. This applies to variable and function declarations.

//Variable declarations (not assignments) and function declarations are hoisted.
// Thus, myVar is declared but not initialized, resulting in undefined.