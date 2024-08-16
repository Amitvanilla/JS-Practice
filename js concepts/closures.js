// Closure Example

function outerFunction(outerVariable) {
    // outerFunction creates a local variable (outerVariable) and returns an inner function
    return function innerFunction(innerVariable) {
        // innerFunction is a closure that has access to outerVariable from outerFunction
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    };
}

// Create a closure by calling outerFunction
const newFunction = outerFunction('outside');

// Call the closure
newFunction('inside');

// Output:
// Outer Variable: outside
// Inner Variable: inside
