// Functions in JavaScript are first-class citizens, meaning they can be treated like any other value.
//     They can be passed as arguments, returned from other functions, and assigned to variables.

function greet(name) {
    return `Hello, ${name}!`;
}

const greeter = greet; // Assigning function to a variable
console.log(greeter('Alice')); // Output: "Hello, Alice!"
