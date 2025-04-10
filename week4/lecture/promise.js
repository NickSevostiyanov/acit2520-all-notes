const fs = require('node:fs');

// const content = fs.readFileSync('file2.txt');        <-- This code looks nice, but blocks code as its async

//                      PROBLEM
// ------------------------------------------------------
// Two fundamental problems with async callback functions
// - Readability Issue (nested callbacks)                           <-- Solve this issue with: Promise
// - No centralized error handler                                   <-- Solve this issue: Promise

//                   FINAL SOLUTION
// ------------------------------------------------------
/*
How to turn these Async functions into a cleaner, better version?
(Using Promise Objects)

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
                
                */ 

               // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
               // SAME THING AS ABOVE
//          If err is caught during the chain,
//          err is called (stops .then() chain)
//          READABILITY IS FIXED
//          'Promise Chain'

    readfilepromise('file1.txt')
        .then((filetwo) => console.log(filetwo))                //          
        .then((filethree) => readfilepromise(filethree))        //          
        .then((filefour) => readfilepromise(filefour, 'utf8'))  //      <-- Turn result into human readable text (utf8)
        .then((result) => console.log(result))                  //          
        .catch((err) => console.log(err));
    
    fs.readfile('file1.txt', (err, filetwo) => {
        if (err) return console
    })

    function readfilepromise(filename) {
        // ASYNC, new Promise is run
        return new Promise((resolve, reject) => {
            fs.readFile(filename, (err, data) => {              //      <-- err === null
                if (err) {
                    reject(err);                                //      <-- Promise object updates from <pending> to <rejected>
                } else {                                        
                    resolve(data.toString())                    //      <-- Send contents to resolve
                }
            });
        });
    }
    // ------------------------------------------------------
    
    
    
    
    
    //    Promise object currently Pending
    //    VVVVVVV
const promise_without_key = readfilepromise('file2.txt');
// console.log(promise_without_key);                                            <-- Returns Promise { <pending> }
// ^^^^^^^^^^^^^^^^^^^^                                             <-- Console Logs too soon (still pending)

const promise_bad_indexing = readfilepromise('file2.txt');
console.log(promise_bad_indexing['[[PromiseResult]]']);                  //      <-- Accessing promise object state returns UNDEFINED
//          ^^^^^^^^^^^^^^^^^^^^                                    <-- Correctly gets result, however, async function continues to read NEXT file. Therefor,
//                                                                      Promise Object === { <pending> }


setTimeout()                                                //      <-- Allows readfilepromise() function to run and return in order
setTimeout(() => {
    console.log(promise);                                   //      <-- DOES NOT WORK. Bad solution. It could take LONGER + timeout to readfile
}, 5000);                                                   //

// const promise = readfilepromise('file2.txt');
promise.then((result) => console.log(result));              //      <-- Promise object Monitors state of running functions
promise.catch((err) => console.log(err));                   //      <-- For example, catch(err), then(result)

console.log('SENDING EMAIL')                                //      <-- Logs in console BEFORE readfile('file2.txt')
//      <-- Promise Object allows other functions to run until its finished <pending>







readfilepromise_final('file2.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err));          //  <-- Javascript does not care about syntax when it comes to .behaviours()

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// SAME THING AS ABOVE
readfilepromise_final('file2.txt').then((result) => console.log(result)).catch((err) => console.log(err));


//                      SOLUTION
// ------------------------------------------------------
module.exports = {
    readfilepromise
}


// Inside Promise Object:
// {
//  <pending>           <-- Changed by readfilepromise()
//  <undefined>         <-- Changed by readfilepromise()
// }

const promise = readfilepromise('file.txt');                //      <-- AS SOON as promise <pending> -> <fufilled>
promise.then((result) => console.log(result));              //      <-- then() is run   (IF result has no errors)
promise.catch((err) => console.log(err.message));           //      <-- catch() is run  (IF err is called back)


