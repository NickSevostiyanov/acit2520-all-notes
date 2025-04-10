// acit2520
// week9
// 3/6/25
// --------
// Review on nodejs project

    // first step to creating a project with nodejs
        // npm init -y
            // generates package.json file
                // python generates: package.txt
            // defines what libraries project uses

            /*
            {
            "name": "lecture",
            "version": "1.0.0",
            "description": "",
            "main": "week9.js",
            "scripts": {
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
            
        // npm install express@5
            // install express
            // @5 = version 5 (latest version)



// ---------------------------------
// How do web browsers remember you?
    // Example:
        // ordering from website
        // Fill cart of orders

        // cart of orders is remembered, even weeks later
        // How do browsers remember your "session" ?

    // Cookies:
        // token/session ID to remember your information

// Website creates "stamp"
//          VVV
    app.get("/", (req, res) => {
        res.send(`<a href="/login">login</a>`)
    })

    // stamp = "digital fingerprint"
    // remembers information for period of time
    
// Stamp:
    // allows web browser to remember/track your session



// ---------------------------------
// --==     express-session     ==--
// ---------------------------------
// Method for tracking cookies (user session/token/"stamp")
    
    // Install express-session
        // npm install express-session 


    // Import express-session library
        const session = require('express-session')


    // Use session
        app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))


    // Access the session as req.session
        app.get('/', function(req, res, next) {
            if (req.session.views) {
            req.session.views++
            res.setHeader('Content-Type', 'text/html')
            res.write('<p>views: ' + req.session.views + '</p>')
            res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
            res.end()
            } else {
            req.session.views = 1
            res.end('welcome to the session demo. refresh!')
            }
        })


// -----------
// passport.js
    // Gives oauth login protocol
    