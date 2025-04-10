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
    

// ================================================
// IFFY + Prevent developement global scope mishaps
// ================================================

    // CONST
    (function() {
        const post = "This is my post1";
    })();

    // LET
    (function() {
        let post = "This is my post1";
    })();
    
        