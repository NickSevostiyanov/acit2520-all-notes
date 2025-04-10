// Runtime Environment
    // Translator (Interpreted)
        // Node APIs
            // const os = require("os");
            // const cpus = os.cpus().length;
// 1. Browser
// 2. Node.js

// -------------------------------------------
    // NodeJS function:

    // "HOF" = "Higher Order Function"
    // Function Takes Another Function
        function addTwo(num1, addReference) {
            return addReference(num1, 2);
                // Calls function add()
        }
console.log(addTwo(7, add));

// -------------------------------------------

// Javascript function
        function add(n1, n2) {
            return n1 + n2;
        }

const sum = add(5, 4);
console.log(sum); // prints 9
// -------------------------------------------
// INDirectly Invoking a Function
// const refOne = add();
// refOne(3, 7);
// console.log(refOne(3, 7));

// const refTwo = add();
// refTwo(10, 5)
// -------------------------------------------
// Creating loops

// Higher order function example:
    const colors = ["red", "blue"];
    function callback(value) {
        console.log(value);

    }
    // ForEach loop requires callbackfunction
colors.forEach(callback);

// function callback(value) {
//     console.log(value);
// }

function forEach(list, callback) {
    for (let index = 0; index < list.length; index++) {
        callback(list[index]);
    }
}


forEach(colors, function (value) {
    console.log(value);
});

// Hoisting = reads all functions and brings to top
// Function Declaration
// - Hoisting = True

    // sum(5, 5)        <--- works before function = hoisting

    // Function sum(n1, n2) {
        // return n1 + n2
    // };

// Function Expression - Hoisting = False

    // sum(5, 5)    <--- does not work (function expression syntax)

    // const sum = function(n1, n2) {
        // console.log(n1 + n2)
    // };

// Arrow Function Expression 
// - Hoisting = False

    // sum(5, 5)    <--- No hoisting

    // const sum = (n1, n2) => {
        // console.log(n1 + n2) 
    // }

    // Special use:
        // sum(5,5)
        // const sum = (n1, n2) => n1 +n2;      <--- Remove RETURN + Curly brackets.


// -------------------------------------------

colors_2 = ['red', 'blue'];

// Use arrow function for callback function
colors_2.forEach((value) => {
    console.log(value);
});


