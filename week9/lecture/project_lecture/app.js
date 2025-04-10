// running this file on terminal:
    // node --watch app.js      (--watch = restart server on code update)
    
    // Alternatively, lets use a shortcut: 
    // npm start
        // INSIDE package.json:
            /*
                {
                "name": "lecture",
                "version": "1.0.0",
                "description": "",
                "main": "week9.js",
                "scripts": {

                    "start": "node --watch app.js"


                    "test": "echo \"Error: no test specified\" && exit 1"
                },
                "keywords": [],
                "author": "",
                "license": "ISC",
                "type": "commonjs",
                "dependencies": {
                    "express": "^5.0.1"
                }
                }
            */
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Allows server to support incoming data
    // express.urlencoded   =   supports data from web
    // express.json         =   supports json (for iphones / androidss)


//      Default html <form> outputs onto URL
//      VVV
// app.get("/", (req, res) => {
//     res.send(`
//         <form action="/login" method="post"> 
//             <input name="username" placeholder="username" />        
//         </form>
//         <button>login</button>
//     `);
// });

//      form method="post":
    //      Submits output of form without showing on URL
    //      <FORM> = [example_username]      =       http://localhost:8080/example_username


app.post("/login", (req, res) => {
    console.log(req.body);
});


app.listen(8080, () => {
    console.log("Server is running!")
});




// Scenario:
    // website has login
        // username + password = login
        // Web browsers cannot communicate to database (SQL)
            // Hackers can brute force website logins
            // Hackers can use database of usernames/passwords

    // webserver = shield that protects database
        // "shield"
            // checks ip address of login user
            // check login attemps

            // Temporarily locks database
            // called "raid locking"
        

// ---------------
// Send HTML File:
    // app.send()
    // ^^^^^^^^^    Expects string of markdown

    // const path = require('path');
    //      app.sendFile()                                              <-- Wants absolute path (use path module)

    // app.get('/file', (req, res) => {
    //     const examplefile = path.join(__dirname, "file.html");       <-- Defines filepath
    //     res.sendFile(examplefile);       
    // });

    //      res.sendfile(examplefile)
    //          ^^^^^^^^
    //          Replaces 

// ----------------------------------------------
// Send EJS file (HTML with Javascript embedded):

    
    // ----------------
    // INSIDE login.ejs

        /*
        <h1><%= username %></h1>
        <form action="/login" method="post">
            <input name="username" placeholder="username"
        </form>
        <button>login</button>
        */


    // -------------
    // USE login.ejs

        /*
        app.set("view engine", "ejs");
        
        app.get("/login", (req, res) => {
            const username = "test123";
            res.render("login", { username });
        });
        */

// ---------------------------------
// --==     express-session     ==--
// ---------------------------------
// Method for tracking cookies (user session/token/"stamp")
    // (documentation on week9.js)

    // Install express-session
        // npm install express-session 


    // Import express-session library
        const session = require('express-session')


    // Use session
        // "session store"
            // Storec in memory
            // Lets view it in our web browser (for visualisation sake)

            // npm install session-file-store

        const FileStore = require("session-file-store")(session);
        app.use(
            session({ 
                store: new FileStore({}),   //  <-- Creates Dictionary for cookie ID's / Information
                secret: 'keyboard cat', 
                cookie: { maxAge: 60000 }
            })
        );


        


    // Access the session as req.session
        app.get('/', function(req, res, next) {

        // -------------
        // If statement:
            // Does user have stamp?

            // If user has cookie / stamp /session
            // Increment number of session views (for example)
            
            if (req.session.views) {
                req.session.views++


                
            // -------------------
            // REGULAR MARKDOWN CONTENT
                res.send('<p>views: ' + req.session.views + '</p>')
            // ANY CONTENT CAN GO IN HERE
            // ------------------



            // ----------------------------------
            // If user does NOT have stamp (session cookie)
            } else {
            
                req.session.views = 1
            //  ^^^^^^^^^^^^^^^^^^^^^
                // Create "session"
                    // session = dictionary (lives on nodejs web server)

                // "session store"
                    // Data held on nodejs web server
                    // Generates unique ID to identify user (session / cookie)

                    // EXAMPLE "session store":
                        /*
                            {
                            "uniqueID123":{ views:1 }           <-- Unique ID generated for user
                            }
                        
                        
                        */

                // Set cookie
                    // hidden "function" between 
                        // req.session.views 
                        // and 
                        // res.send("string")

                    // HTTP Response header:
                        // Browser receives METADATA (from "session store")
                        // SET-cookie   =   "uniqueID123"


                    // "cookie store"
                        // Data held on web browser
                        // cookie = "string"

                        // STORES   =   "uniqueID123"

                    
                // Difference:
                    // "session store"
                        // stores DATA of sessions (Cookie ID)
                    // "cookie store"
                        // cookie ID    =   STORED in browser
                        // cookie ID    =   used for any line of code on nodejs file
                        // cookie ID session will be used for any function requiring it



                    

                res.send('welcome to the session demo. refresh!')
            }
        });

