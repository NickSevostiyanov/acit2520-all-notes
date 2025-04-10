// 3/20/25
// week11
// -------
// We are not using javascript anymore
// Javascript is generally not as used anymore
// Typescript is better
// -------------------------------------------


// -------------------
// Install typescript:
    // sudo npm install -g typescript


    // Installs tsc = type-script compiler
        /*
        ❯ tsc --version
        Version 5.8.2
        */

    // tsc --init
        // Creates tsconfig.json



// Typescript feature (checks if arg is number)
// Node.js must not see this in order to run properly (strip typescript features)
//               VVVVVV      VVVVVV
function sum(n1: number, n2: number) {
    return n1 + n2;
}

// console.log(sum(45, "30"))
    //             ^^^^^^^   Will not work, only takes numbers

console.log(sum(45, 30));


// ----------------------------------------------------------
// To run typescript on Nodejs (by removing typescript files)
    // tsc  =   Translates to javascript
//          =   removes typescript features (that are still there)


// Globally installed important packages (to avoid having to manually reinstall)
    // sudo npm install -g tsx
    // sudo npm install -g typescript


// tsx = easiest way to run typescript in node.js
    /*
      "scripts": {

        "start": "tsx ts_app.ts",   <-- ADD to package.json

        "test": "echo \"Error: no test specified\" && exit 1"
        },
    */


// SOLUTION TO app.js
    //                            Checks if argument is number
    //                            VVVVVVV
    function sum_array(listOfNum: number[]) {
        return listOfNum.forEach((n) => console.log(n));
    }

    console.log(sum_array([50, 50]))
    // console.log(sum_array([50, "50"]))
//                                ^^^^     
//                                Instantly shows error (Type 'string' is not assignable to type 'number'.ts(2322))
