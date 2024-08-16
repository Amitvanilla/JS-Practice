let name1 = {
    firstname:"Amit",
    lastname:"Gupta"
}
let name2 = {
    firstname:"Bat",
    lastname:"Ball"
}

let myName = function (homeTown, city) {
    console.log(this.firstname + " " + this.lastname + " "+ "is from" + " " +  homeTown + " " + city);
}

//call we pass the object as first parameter and the others separated by comma
myName.call(name1, "Jhunsi", "Prayagraj")


// apply same as call but the remaining parameters passed in a list
myName.apply(name2, ["cricket", "England"])

// bind makes copy of method to be called anywhere
let bind = myName.bind(name1, "Jhunsi", "Prayagraj");
bind()

