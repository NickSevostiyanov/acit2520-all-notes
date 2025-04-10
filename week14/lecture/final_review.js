// Pre-final
    // Javascript Practice Booklet
    // Week 14
    // 4/10/25

// ===============================================
// Give an example of using Client side Javascript
// ===============================================

    // Javascript Optimistic UI (Progressive Enhancement)   |   express_example

        // Have Javascript load time rely on Users Internet.
        // Client side Javascript 
            // Make user experience fast and seamless
                fetch()
            //  ^^^^^^^
            const form = document.querySelector("form");
            form.addEventListener("submit", (event) => {
                event.preventDefault(); 
                const p = document.createElement("p");
                const title = document.querySelector("input");
                const main = document.querySelector("main");
                p.innerText = title.value;
                main.append(p);
            });

            // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            // Example: 
                // Form which pushes to database
                    // Client-side javascript handles database actions
                    // allows processing on clients device (which appears fast)
                    // fetch()  <-- asynchronously preforms action ( in the background )
                // 
            
                // Discord, gmail, etc uses Client Side Javascript


    
// Ecmascript = Javasript
    // Oracle copyrights "Javascript"
    // Ecmascript IS Javascript

// Runtime Environments
    // What is a runtime environment?
    // Differences between
        // executing Javascript outside the browser (Node.js) 
        // inside the browser (client-side javascript)



// ====================
// Javascript Variables
// ====================
    // Facebook, Instagram, AirBNB, Netflix
    var post = "This is my post";

    // Every large App relies on this first line of code
        // will instantly reject if not included
        // PREVENTS VARIABLES FROM BEING GLOBAL
        // CREATES LOCAL VARIABLES (To not Clash with Shared project)

    (function() {
    })();
        // creates and executes function instantly when page loads 
            // Inside .html:
                // script1.js   <-- Includes Post
                // script2.js   <-- Includes Post
                //       ^
                //       script2.js Post Overwrites script1.js Post

            // Example:
                // Document1.JS
                    // for( i = 0; i < 5; i++) => {
                    // }    
                // Document1.JS     <-- Variable i will overwrite documment1.JS's i variable
                //          V
                    // for( i = 0; i < 5; i++) => {
                    // }    


    // ----------------------------------------------
    // Immediately Invoked Function Expression (IFFY)
    // ----------------------------------------------
            // var post is NOT a local variable
            // IFFY does not protect var from being Global Variable
        // VAR
        (function() {
            var post = "This is my post1";
        })();
        

    // ------------------------------------------------
    // IFFY + Prevent developement global scope mishaps
    // ------------------------------------------------

        // CONST
        (function() {
            const post = "This is my post1";
        })();

        // LET
        (function() {
            let post = "This is my post1";
        })();
        
            
// ==========
// Data Types
// ==========
    // Self explanatory, search it up (Open Book)

    // --------
    // Equality
    // --------
        const four = 4;
        four === "4"
            // false    <-- Not same Datatype
        four == "4"
            // true     <-- four.toString()
        
        // USE STRICT EQUALITY ( === ) ON TESTS
            // AVOID implicit Type() conversion
                // (Types are converted in the background)

            

// =========
// Functions
// =========
        // Function Declaration Syntax
            abc();                      // Hoisting (can be called before written)
            function abc() {
                console.log("Hi");      // Original Syntax for writing JS functions
            }

const { rejects } = require('assert');
        // Arrow functions
            const fs = require('fs');
            fs.readFile("file.txt", (err, data) => {
                                        // write callbacks with arrow functions
            });

            fs.readFile("file.txt", (err, data), function() {
                                        // Uglier, Messier
            });


    // ------------------
    // Styles of function
    // ------------------
            // HOISTING | only works for Function Declaration Syntax 
            // VVVVVVV
            writeFile();
            function writeFile() {

            }

            // Const 
                // HOISTING | Does NOT work
            const writeFile = function() {

            }

            // Arrow function 
                // HOISTING | Does NOT work
            const writeFile = () => {}
            


// ==========
// Final Exam
// ==========
    // More complex to written portion on Midterm
        // No express
        // No servers
        
    

    // Written Portion:
        // 2 files    <-- never seen before
            // .csv     | could be one of
            // .json    | these data types

            // These methods do NOT work:
                // csvStreams
                // readJson         <-- File is "unique" made by Armaan
                                        // Unique Type()
                

        // example of "files" on final
            // csv/json "unique" type():
                // john, 25, {}
                // sandra, 30, {}       <-- fs.readFile
            
            // split( , ) returns:
                // [john, 25, { }]
                // [sandra, 30, { }]


// ======================
// LITERALLY ON THE FINAL:
// ======================
    // 2 files given are NOT .csv OR .json
        // "unique filetype"

    // it contains the following information

        // Players
            // id: 1    |   john, USA, 23
            // id: 2    |   nick, VAN, 18
            // id: 3    |   bob, MTL, 25

        // Games            <-- record goals scored
            // [1, 2, 3]    <-- relational database
                                // list of ID primary keys
            


    // 3 questions
        // --------------------
        // 1. Who's the oldest?
        // --------------------
            // use code to find who the "oldest" player is
            
            // .sort() allows 1 line solution
            // USE .sort() !!!

        // ------------------------------------------------
        // 2. find a country specific country (e.g "China")
        // ------------------------------------------------
            // USE .filter()    <-- Filter for .filter("China")

        // =====
        //   3.
        // =====
            // ????
            // He wont tell us question 3


// ================
// AWAIT / PROMISES
// ================


    const fs = require('fs');
    const data = fs.readFile("players.csv");
        // not possible. Callbacks cannot return data
        // RETURN does not exists for callbacks

    fs.readFile("players.csv", (err, data) => {
    });


    // -----------
    // ASYNC AWAIT
    // -----------

        // QUESTION: How does await handle "promise" objects?
        const data_promises = await fs.readFile("players.csv");
            // await = can only exist if object returns "promise"
            // await = unwraps "promise" object


        // QUESTION: What happens without await?
        const data_no_await = fs.readFile("players.csv");
            // NO AWAIT 
        console.log(data_no_await)
            // "promise"    <-- output as Promise object is not unwrapped

        // 2 options to unwrap "Promise" object
            // await <code>
            // .then()

        // QUESTION: What if you use await when a "Promise" is not returned?
        const data_no_promises = await fs.readFile("players.csv");
            // IF Promise is not returned:
                // await = automatically creates Promise object. Allows to work
                    // despite not receiving a promise object for await

        
        // ========================================================================================
        // QUESTION: A promise object is NOT returned. How to wrap functions into a Promise object?
        // ========================================================================================
            const fs = require("fs");
            function readFile(filename) {
            // "PROMISE OBJECT" is NOT returned
            //  VVVVVV
                return fs.readFile(filename, "utf-8", (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            }
            // --------------------------
            // SOLUTION (correct syntax):
            // --------------------------
            const fs = require("fs/promises");
            function question1(players) {}
            function question2(players) {}
            function question3(players, games) {}

            async function main() {
                try {
                    // const players = await fs.readFile("players.csv");
                    // const games = await fs.readFile("games.csv");
                    const [ players, games ] = await Promise.all([
                        fs.readFile("players.csv"),
                        fs.readFile("games.csv"),
                    ]);

                    question1(players);
                    question2(players);
                    question3(players, games);
                } catch (error) {
                    console.log(error);
                }

            }



            // const fs = require("fs/promises");
            // function readfile(filename) {
            //     return new Promise((resolve, reject) => {
            //         fs.readFile(filename, "utf-8", (err, data) => {
            //             if (err) {
            //                 reject(err);
            //             } else {
            //                 resolve(data);
            //             }
            //         });
            //     });
            // } 

                    


        
            const data_example = await readFile("players.csv");