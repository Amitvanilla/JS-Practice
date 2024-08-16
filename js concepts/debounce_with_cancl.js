// Implement a debounce function that comes with a cancel method to cancel delayed invocations.

const debounce = (func, delay, cancel) => {
    let id
    return function(...args){
        if(!cancel){
            clearTimeout(id)
        }
        id = setTimeout(func(...args), delay)
    }
}