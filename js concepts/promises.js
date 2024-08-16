const newPromise = new Promise((resolve, reject) => {
    let rejected = true
    if(!rejected){
        resolve('Promise resolved!!')
    }
    else {
        reject('Promise rejected!!')
    }
})


newPromise.then(resolved => {
    console.log(resolved)
})
.catch((err) => {
    console.log(err)
})


let arr = ['amit', "akash", "log"]

console.log(arr.join(' '))