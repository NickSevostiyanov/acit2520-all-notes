// acit2520
// Week 13
// last lecture
// ------------
// Goals:
    // describe the web-dev industry since the 1990's
    // Go through "timeline" of web-dev
        // problems / solutions
        // Old methods, old strategies
    

    // how are websites built today?
    // Utilize AI


    // MPA = Multi-Page Application



// ===========================
// Start of the World-Wide-Web
// ===========================


// ===============
// Static websites
// ===============
// ( web 1.0 era)
// ( 1990s )
// ---------------

    // Static MPA

    // only option for hosting websites 
    // Html = "hypertext" markup language
        // "text with power" (links, interaction, etc..)

    // Process:
        // Client PC (at home) ----address----request----> Telus (Internet Service Providor)
        // Telus               ---->                       Gives client static IP Address


        // Website is hosted !
            // address: 16.1.1.2 (example of an address provided by telus)
            // domain is given: mycoolsite.com
            
        
        // METHOD OF PUT / GET in static website: 
            // Site GET request
            // LocalHost sends POST

            // APACHE method (old method of GET / POST / PUT)


    // "STATIC" definition
        // Site is oriented around <a> tags
            // <a>index.html    -->     <a>contact.html     -->     <a>about.html
            


    /*
   
    // SEE EXAMPLE ./1990s/
`   

        // npx serve:
            ┌─────────────────────────────────────────┐
            │                                         │
            │   Serving!                              │
            │                                         │
            │   - Local:    http://localhost:3000     │
            │   - Network:  http://10.65.37.56:3000   │
            │                                         │
            │   Copied local address to clipboard!    │
            │                                         │
            └─────────────────────────────────────────┘    


            HTTP  4/3/2025 9:14:20 AM 127.0.0.1 GET /        
                                                ^^^^^
                                                GET REQUEST

            HTTP  4/3/2025 9:14:20 AM 127.0.0.1 Returned 200 in 51 ms
            HTTP  4/3/2025 9:14:21 AM 127.0.0.1 GET /favicon.ico
                                                ^^^^^^^^^^^^^^^^
                                                "Favourite Icon"
                                                Not required, displays icon for browser

            HTTP  4/3/2025 9:14:21 AM 127.0.0.1 Returned 404 in 10 ms
    */ 
    // --------------------------   
    // ISSUES WITH STATIC SERVER:
        // EVERY user receives the same html
        // No dynamic features

        // 

// ================
// Dynamic Websites
// ================
// ( web 2.0 era)
// ( + 1990s )
// ----------------

    // Turn static sites into personalized, dynamic and manipulatable content
    // PHP:
        // Dynamic MPA

        // .html    --->    .php
        // INCLUDES PHP INTERPRETER
        // dominant coding language in 90's
        // mod_php

        // origin of .EJS syntax
        // enables variables in .html
        // <%= my_variable %>



        // Goal:
            // Make web page unique for every user
                // unique styling / themes


        // ------------------------------
        // Developement of Dynamic Sites:
            // builds off web 1.0 method
            // apache GET / PUT / POST request


            // GET index.php
            // index.php    --->    php Interpreter


// =========================
// Dynamic Websites 
// JAVASCRIPT FOR EVERYTHING
// ( No PHP )
// =========================
// ( node.js era)
// ( 2009 )
// -------------------------

    // In 2009, Ryan Dahl had an idea:
        // Javascript was the only possible language for browsers to understand
            // Javascript             = REQUIRED
        // PHP was required to dynamically manipulate variables
            // idea was to make PHP   = NOT REQUIRED

        // Solution:
            // Replace PHP
                // No extra excessive extra for frontend
            // Javascript Frontend + Backend


    
    // Overview:
        // ( Static to Dynamic ): 
            // Apache + PHP Plugin
            // Sends pages with variables changed

        // ( Node to make JS Dynamic )
            // Turn Javascript into a powerful language (Node)
            // Handles variables in pages
            // 






// =========================
// AJAX Prelude:
    // AJAX = fetch()       <-- function



    // Makes GET / PUT / POST happen smoothly

    // -------------------
    // ISSUES BEFORE AJAX:
    
    // Only method of Getting / Sending HTML Pages
        // Step 1
            // mysite.com
                // GET          ---->       express
    
        // Step 2
            // Express
                // contact.ejs  ---->       <a href"/contact"
    
            
        // Only method of sending to a Database
            // <form> 
                // POST         ---->       express
    
    
        // -----------------------
        // ISSUES WITH THIS METHOD
            
            // REFRESHING
            // Interactions causes page refreshes 
                // ( bright white screen )
                // choppy, ugly reload on every interaaction

        // -----------------------
        // SOLUTION TO REFERESHING
            // SPA = Single Page Applications
            
            // Make pages feel like 1 page
                // smooth
                // no refresh
                // cohesive flow
            
            // Facebook ( Meta )
                // revolutionized technology for facebook to feel like
                // one smooth transitioning app
                // time spent developing non-choppy feeling app

                // Facebook CREATED React.js

            // --------
            // react.js
                // cancels out page reloads
                // developed by facebook



// =========================    
// PEMPA
// ( Progressively Enhanced Multipage Application )
// =========================
// ( AJAX era)
// ( 2009 )
// -------------------------

    // npa:
        // web-dev with express, node, etc..
    
    // pempa:
        // use fetch function (AJAX)
        

    // Javascript contains vulnerabilities
        // typically disabled in high stakes jobs

    // PEMPA:
        // Fallback for javascript vulnerabilities
        // IF js = disabled, revert to OLD web-dev methods:
            // static webpages
            // unsmooth refreshing ( refer to prelude above )


// ===========================  
// SPA
// ( Single Page Application )
// ===========================
// ( React.js )
// ( meta )
// ---------------------------

    // "Single page application" means that the app acts like a single page
        // no refresh
        // no choppy redirection

    // react.js
        // developed by meta to make facebook fully transitioned
        // no choppy refresh



// ===========================  
// ===========================  
// ===========================  
// SEE /TRACKER/
    // barebones web-developement
    // post / get = most critical use of apps


    app.post("/createAssignment", (req, res) => {
        const { title } = req.body;
        database.push({ id: database.length + 1, title: title});
    //  ^^^^^^^^^^^^^
        // Code 302 = Update due to new post / get
    
    
    //  res.redirecter sends [302 + "/"] post to browser
    //  VVVVVVVVVVVVVV
        res.redirect("/");
    });
    
    app.get("/", (req, res) => {
        // const user = getUserFromDatabase();
        res.render("index", { assignments: database });
    
        // res.render  
            // takes index.ejs
            // takes data from database
            // combines custom index.ejs + data (mashes it together)
    
    
        // ssr
            // Server Side Rendering
            // res.render occurs on the server side
            // MPA uses SSR
                // multi-page applications uses Server Side Rendering!
    
    
    });


// ===========================  
// ISOMORPHIC WEB APPS
// (  )
// ===========================
// ( React.js )
// ( meta )
// ---------------------------
