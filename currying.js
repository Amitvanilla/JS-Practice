function f(x) {
    let sum = x;
    console.log("x", x)

    function inner(y) {
        console.log("y", y);
        if (y === undefined) {
            return sum;
        } else {
            sum += y;
            return inner;
        }
    }

    return x === undefined ? 0 : inner;
}

// Test cases
// console.log(f(2)(3)()); // Output: 5
console.log(f(1)(2)(3)(4)()); // Output: 10
// console.log(f(5)()); // Output: 5
