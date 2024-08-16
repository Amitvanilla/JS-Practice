function f(x) {
    let sum = x;

    function inner(y) {
        if (y === undefined) {
            return sum;  // Base case: return the sum when no argument is provided
        } else {
            sum += y;    // Accumulate the sum
            return inner;  // Return the inner function to continue the chain
        }
    }

    return x === undefined ? 0 : inner;
}

// Test cases
console.log(f(1)(2)(3)(4)()); // Output: 10
