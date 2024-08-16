console.log("Start");

setTimeout(() => {
    console.log("Macrotask 1");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("Microtask 1");
    })
    .then(() => {
        console.log("Microtask 2");
    });

setTimeout(() => {
    console.log("Macrotask 2");
}, 0);

console.log("End");
