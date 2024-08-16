
let name1 = {
    firstname: "Amit",
    lastname: "Gupta"
};

let name2 = {
    firstname: "Bat",
    lastname: "Ball"
};

let myName = function(homeTown, city) {
    console.log(this.firstname + " " + this.lastname + " is from " + homeTown + " " + city);
};

// Using `call`
myName.call(name1, "Jhunsi", "Prayagraj");
// Output: "Amit Gupta is from Jhunsi Prayagraj"

// Using `apply`
myName.apply(name2, ["cricket", "England"]);
// Output: "Bat Ball is from cricket England"

// Using `bind`
let bindMyName = myName.bind(name1, "Jhunsi", "Prayagraj");
bindMyName();
// Output: "Amit Gupta is from Jhunsi Prayagraj"



/*
1. Using `call`:
   - Invokes the function immediately.
   - The first argument is the object to be used as `this`.
   - Remaining arguments are passed individually.
*/
// myName.call(name1, "Jhunsi", "Prayagraj");
// Output: "Amit Gupta is from Jhunsi Prayagraj"

/*
2. Using `apply`:
   - Similar to `call`, but arguments are passed as an array.
   - Useful when the number of arguments is dynamic.
*/
// myName.apply(name2, ["cricket", "England"]);
// Output: "Bat Ball is from cricket England"

/*
3. Using `bind`:
   - Returns a new function with `this` bound to the specified object.
   - Does not invoke the function immediately.
   - Can be called later with the same or different arguments.
*/
// let bindMyName = myName.bind(name1, "Jhunsi", "Prayagraj");
// bindMyName();
// Output: "Amit Gupta is from Jhunsi Prayagraj"
