const join = (a, b, c) => {
    console.log(`${a}_${b}_${c}`)
}
const curriedJoin = curry(join)
curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(1)(2, 3) // '1_2_3'
curriedJoin(1, 2)(3) // '1_2_3'



function curry(fn) {
    console.log(arguments)
    return function(...args){
        if(args.length === arguments.length){
            fn(...args)
        }
        return function(...a){
            // console.log(a)
            let x = args.concat(...a)
            fn(...x)
        }
    }
}



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
