//VAR

function testVar() {
    console.log(x); // undefined due to hoisting
    var x = 10;
    if (true) {
        var x = 20; // Same variable as above, due to lack of block scope
    }
    console.log(x); // 20
}

testVar();

//LET

function testLet() {
    console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 10;
    if (true) {
        let y = 20; // Different variable due to block scope
        console.log(y); // 20
    }
    console.log(y); // 10
}

testLet();

//CONST

function testConst() {
    const z = 10;
    // z = 20; // TypeError: Assignment to constant variable

    const obj = { a: 1 };
    obj.a = 2; // This is allowed
    console.log(obj.a); // 2

    const arr = [1, 2, 3];
    arr.push(4); // This is allowed
    console.log(arr); // [1, 2, 3, 4]
}

testConst();


// ### Summary

// #### Scope:
// - `var` is function-scoped.
// - `let` and `const` are block-scoped.
//
// #### Hoisting:
// - `var` is hoisted and initialized with `undefined`.
// - `let` and `const` are hoisted but not initialized (temporal dead zone).
//
// #### Reassignment:
// - `var` can be reassigned and re-declared.
// - `let` can be reassigned but not re-declared.
// - `const` cannot be reassigned or re-declared, but the contents of objects and arrays it points to can be modified.
