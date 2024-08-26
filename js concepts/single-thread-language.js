console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 1000);

console.log('End');


//JavaScript is single-threaded, meaning it can execute only one operation at a time. This is managed through the event loop,
// which allows JavaScript to perform non-blocking operations despite being single-threaded.