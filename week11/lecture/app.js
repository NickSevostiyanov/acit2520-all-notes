// 3/20/25
// week11
// -------
// We are not using javascript anymore
// Javascript is generally not as used anymore
// Typescript is better
// -------------------------------------------



// We want to ADD numbers together, not concatenate
function sum(n1, n2) {
    return n1 + n2; "54"
}


console.log(5, "4");
const { error } = require("console");
const { type } = require("os");
        // ^^^^^^^^ <-- Outputs "54" (NOT 9)


// --------------------------------
const process = require("process");
const [, , n1, n2] = process.argv;


// listofNum = provide n1 and n2 as ARRAY 
         // ( [n1, n2] )

function sum2(listOfNum) {
    let total = 0;
    if (typeof n1 != "number" || typeof n2 != "number") {
        throw new Error("Inputs must be numbers !");
    }

    listOfNum.array.forEach(num => total += num);
    return total;


}


console.log(sum(n1, n2));


// typeof 45    =   'number'
// typeof True    =   'boolean'
// typeof "bcit"    =   'string'

// typeof {}    =   'object'    <-- BOTH ARE OBJECT
// typeof []    =   'object'    <-- BOTH ARE OBJECT

// ^^^^^^^^^    SOLUTION = Array.isArray({})    =   True
//                         Array.isArray(45)    =   False
//                         Array.isArray([])    =   True

// ----------------------------------------
// How to check if listOfNum is an "array"?

    // Compiler = check value against set of rules
        // if value does not follow rule    =   do not continue
        // else                             =   Continue


        // Typescript provides compiler checking
    
        // REMAKE THIS EXAMPLE TO app.ts
        // CONTINUE LECTURE ON app.ts
        