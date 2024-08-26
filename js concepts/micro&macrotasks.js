console.log('Start');

setTimeout(() => {
    console.log('Macrotask: setTimeout');
}, 0);

Promise.resolve().then(() => {
    console.log('Microtask: Promise 1');
}).then(() => {
    console.log('Microtask: Promise 2');
});

console.log('End');

// Macrotasks
// Macrotasks (sometimes just called "tasks") include events that are placed in the callback queue (task queue).
// These tasks are generally scheduled by functions like setTimeout, setInterval, and I/O operations (like network requests).

// Microtasks
// Microtasks are tasks that are scheduled to run immediately after the currently executing code completes, but before any macrotasks.
// Microtasks are generally used for operations that need to happen right after the current script execution finishes, such as resolving promises.


//     Microtasks have higher priority than macrotasks and are executed before any macrotask is processed.
//     Microtasks can cause delays in macrotask execution if the microtask queue is filled with many microtasks.
//     The event loop processes all microtasks before moving to the next macrotask,
//     ensuring that microtasks do not interrupt the flow between two macrotasks.