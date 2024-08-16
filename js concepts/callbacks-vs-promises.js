// Example 1: Using Callbacks

function fetchDataCallback(callback) {
    setTimeout(() => {
        const data = "Fetched Data";
        callback(null, data);  // Execute the callback with the fetched data
    }, 2000);
}

function processInfo(data, callback) {
    setTimeout(() => {
        const processedInfo = `${data} - Processed`;
        callback(null, processedInfo);  // Execute the callback with processed data
    }, 1000);
}

function storeData(processedData, callback) {
    setTimeout(() => {
        const savedData = `${processedData} - Saved`;
        callback(null, savedData);  // Execute the callback with saved data
    }, 1000);
}

// Using the fetchDataCallback function
fetchDataCallback((error, data) => {
    if (error) return console.error(error);

    processInfo(data, (error, processedInfo) => {
        if (error) return console.error(error);

        storeData(processedInfo, (error, savedData) => {
            if (error) return console.error(error);

            console.log("Final Result (Callback):", savedData);  // Output: "Fetched Data - Processed - Saved"
        });
    });
});

// Example 2: Using Promises

function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Fetched Data");
            } else {
                reject("Error: Failed to fetch data");
            }
        }, 2000);
    });
}

function processDetails(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const processedData = `${data} - Processed`;
            resolve(processedData);  // Resolve the promise with processed data
        }, 1000);
    });
}

function saveData(processedData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const savedData = `${processedData} - Saved`;
            resolve(savedData);  // Resolve the promise with saved data
        }, 1000);
    });
}

// Using the fetchDataPromise function
fetchDataPromise()
    .then(result => {
        console.log("Promise Result:", result);  // Output: "Fetched Data"
    })
    .catch(error => {
        console.error(error);  // Handle error
    });

// Chaining promises
fetchDataPromise()
    .then(data => processDetails(data))
    .then(processedData => saveData(processedData))
    .then(finalResult => {
        console.log("Final Result (Promise):", finalResult);  // Output: "Fetched Data - Processed - Saved"
    })
    .catch(error => {
        console.error(error);  // Handle errors
    });

// Example 3: Using Async/Await

async function handleDataAsync() {
    try {
        const data = await fetchDataPromise();  // Wait for data to be fetched
        const processedData = await processDetails(data);  // Wait for data to be processed
        const finalResult = await saveData(processedData);  // Wait for data to be saved

        console.log("Final Result (Async/Await):", finalResult);  // Output: "Fetched Data - Processed - Saved"
    } catch (error) {
        console.error("Error:", error);  // Handle errors
    }
}

handleDataAsync();
