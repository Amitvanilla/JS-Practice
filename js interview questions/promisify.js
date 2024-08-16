function promisify(func) {
    // Return a new function that returns a promise
    return function(...args) {

        console.log(...args);
        return new Promise((resolve, reject) => {
            // Call the original function with a callback
            func(...args, (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });
    };
}

// Usage example:
const callback = (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
};

const func = (arg1, arg2, callback) => {
    let hasError = true; // simulate an error condition
    setTimeout(() => {   // simulate async behavior
        if (hasError) {
            callback("someError");
        } else {
            callback(null, "someData");
        }
    }, 1000);
};

const promisedFunc = promisify(func);

// Use the promisified function
promisedFunc(1, 2).then((data) => {
    console.log(data); // This will log "someData" if no error
}).catch((error) => {
    console.log(error); // This will log "someError"
});
