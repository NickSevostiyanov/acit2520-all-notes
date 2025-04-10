// Callback functions
const fs = require('node:fs');
const { readfilepromise } = require('./promise');



// WILL BE ON TEST:

// Inside Directory:
    // file1.txt
    //  L file2.txt     <-- (message inside file1.txt (name of the next text file))
    // file2.txt
    //  L file3.txt     <-- (message inside file2.txt)
    // file3.txt
    //  L file4.txt     <-- etc..
    // file4.txt
    //  L You reached the end of the chain!     <-- (final message inside file4.txt)

// Problem:
//      How to use contents inside file1.txt (file2.txt) to open file2.txt and so on?

//                  Bad solution:
// ------------------------------------------------------
// Two fundamental problems with async callback functions
// - Readability Issue (nested callbacks)
// - No centralized error handler

fs.readFile('file1.txt', (err, filetwo) => {
    if (err) return console.log(err);
    fs.readFile(filetwo, (err, filethree) => {
        if (err) return console.log(err);
        fs.readFile(filethree, (err, filefour) => {
            if (err) return console.log(err);
            fs.readFile(filefour, 'utf8', (err, result) => {
                if (err) return console.log(err);
                console.log(result);
            });
        });
    });
});

// Lets try to fix this 'bad solution':

fs.readFile('file1.txt', (err, filetwo) => {
    if (err) return console.log(err);
});                                                             // Looks Neater
fs.readFile(filetwo, (err, filethree) => {                      // <-- But filetwo does not exist (undefined)
    if (err) return console.log(err);                           // Functions are async = definitions only exist in indepedent functions
});
fs.readFile(filethree, (err, filefour) => {
    if (err) return console.log(err);                           // How can we make these async functions work?
});                                                             // Can we make variables accessible?
fs.readFile(filefour, 'utf8', (err, result) => {
    if (err) return console.log(err);
    console.log(result);
});


                                                                // Theoretical solution:
let filetwoglobal = null;                                           // Create empty global variable (null)
                                                                    // Populate filetwoglobal with data
const filetwo = fs.readFile('file1.txt', (err, filetwo) => {
    if (err) return console.log(err);
    filetwoglobal = filetwo;            
});         
//              NULL                                                WILL NOT WORK:
//          VVVVVVVVVVVVV                                               ASYNC ISSUE
fs.readFile(filetwoglobal, (err, filetwo) => {                      //  filetwoglobal runs .readfile as NULL
    if (err) return console.log(err);                               //  Async does not update empty variable in time
    filetwoglobal = filetwo;                                        
});                                                                 // This problem took 10 YEARS to solve in Javascript


// ------------------------------------------------------
// Two fundamental problems with async callback functions
// - Readability Issue (nested callbacks)                           <-- Solve this issue with: Promise
// - No centralized error handler                                   <-- Solve this issue: Promise



// What is promise?
    // Object -> dictionary

// Javasript "Literals"
    const object_example = {};      // Object Literal
    const object_example_num = 2025;      // Object Literal

    const string_example = '';      // <-- String Literal
    const string_example_str = 'Hello World!';      // <-- String Literal


// Truth about "Literals":
    // Literals are CLASSES
    // string_example = new String('')  <-- Javascript calls function:
        // new String()

// Promises:
    const object_promise = new Promise();
        // returns Promise{}            <-- A 'Promise Object'
        
// Structure of a Promise Object:
    /*
    Promise {<pending>} i
        [[PromiseState]]: "pending"
        [[PromiseResult]: undefined]
    */ 

// Modelling Async Functions into 'Promise Objects'

    // fs.readfile('file1.txt')         <-- Computer looks for file in memory
        /*
        Promise {<pending>} i               If 'file1.txt' === found
        [[PromiseState]]: "pending"     <-- State = fuffilled 
        [[PromiseResult]: undefined]    <-- Result = 'file2.txt'
                          ^^^^^^^^^
                        IF ERR          <-- Returns (err)

        3 Possible states of [[PromiseState]]
            pending
            fulfilled
            reject


        */ 

// Creating our Promise object

new Promise((resolve, reject) => {                                          // Returns Promise {<fulfilled>: undefined}
    resolve(); // Goes from Pending -> Fulfilled
})
//                                                                                                              Adds Content
//                                                                                                            VVVVVVVVVVVVVVVV
new Promise((resolve, reject) => {                                          // Returns Promise {<fulfilled>: 'We read the file'}
    resolve('We read the file!'); // Goes from Pending -> Fulfilled
})

new Promise((resolve, reject) => {                                          // Returns Promise {<rejected>: 'something went wrong'}
    reject('Something went wrong! Rejected!'); // Goes from Pending -> rejected
})

// Chaining Promise objects:
readfilepromise('file1.txt')
    .then((filetwo => 5 + 5))       //      <-- Promise Object is NOT returned
//   ^^^^^^^^^^^^^^^^^^^^^^^^                   Javascript helps you out if .then() returns NOT A PROMISE OBJECT
// SAME THING AS ABOVE                          
// .then((filetwo) => new Promise((resolve, reject) => resolve(5 + 5)))
    .then((value) => console.log(value))    //  .then() chain continues, 10.then((value))   <-- is valid because of Javascript help