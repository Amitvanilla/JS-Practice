// Simulating an asynchronous operation using a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

// Using async/await to handle the Promise
async function fetchDataAsync() {
    try {
        console.log("Fetching data...");
        const result = await fetchData();
        console.log(result);  // Output after 2 seconds: "Data fetched successfully!"
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchDataAsync();
