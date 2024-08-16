const deepclone = (obj) => {
    if (typeof obj !== 'object' || obj === null) return obj;

    let newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        let value = obj[key];
        newObj[key] = deepclone(value);
    }

    return newObj;
};

let arr = [1, 2, 3, [4, [5, 6]]];

// Shallow clone creates a new instance, but nested arrays/objects are still referenced.
// This means that shallowCloneArr !== arr, but shallowCloneArr[3] === arr[3]
let shallowCloneArr = [...arr];
console.log(shallowCloneArr === arr); // false, because shallowCloneArr is a new array

// However, shallowCloneArr[3] is still the same reference as arr[3]
console.log(shallowCloneArr[3] === arr[3]); // true

// Deep clone creates a completely new copy, including nested arrays/objects.
let newArr = deepclone(arr);
console.log(newArr === arr); // false, because newArr is a completely new array

// The nested arrays are also deep-cloned, so newArr[3] !== arr[3]
console.log(newArr[3] === arr[3]); // false
