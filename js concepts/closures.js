function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable:', outerVariable); // Accesses outerVariable
        console.log('Inner Variable:', innerVariable);  // Accesses innerVariable
    };
}

const closureFunction = outerFunction('outer value');
closureFunction('inner value');

//     outerFunction returns innerFunction.
//     innerFunction retains access to outerVariable from outerFunction even after outerFunction has executed and returned.
//     When closureFunction is called with 'inner value', it still has access to 'outer value',
//     demonstrating the closure property.



function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
