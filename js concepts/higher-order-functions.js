function hof(a,b, fn){
    return fn(a, b)
}

const sum = (a, b) => a + b

console.log(hof(1,2,sum))

//Higher order functins are functions that take functions as argument and returns function as their result