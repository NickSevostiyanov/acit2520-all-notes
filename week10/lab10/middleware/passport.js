const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;

const userController = require("../controllers/userController");
const { database } = require("../models/userModel");


const githubLogin = new GitHubStrategy({
  // Github requires basic identification
    // prevents overload for their database
    // easier for github to track what site makes requests
  clientID: "Ov23liFJJ2cpniTfN1L6",
  clientSecret: "cd996d365c3b11d9bc05c921c21d7f31ace69088",
  callbackURL: "http://localhost:8000/auth/github/callback"
},



function(accessToken, refreshToken, profile, done) {

  // User.findOrCreate({ githubId: profile.id }, function (err, user) {
  //   return done(err, user);
  // });


  // SOLUTION to Deserialization User issue
    // If user exists:
      // Continue
    // Else:
      // Create new user to Database

      // Ensure profile variable is working, else return false
      if (!profile) return done(null, false);
      
    // ----------------------------------------------------------
    const user = database.find((user) => user.id === profile.id);
    if (user) {
      return done(null, user);
    } else {
      const newUser = {
        id: profile.id,
        name: profile.displayName
      };
      database.push(newUser);
      return done(null, newUser);

    }
  }
);


const localLogin = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    const user = userController.getUserByEmailIdAndPassword(email, password);
    return user
      ? done(null, user)
      : done(null, false, {
          message: "Your login details are not valid. Please try again",
        });
  }
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  let user = userController.getUserById(id);
  if (user) {
    done(null, user);
  } else {
    done({ message: "User not found" }, null);
  }
});

// ------------------------------
// Important deserliazeUser error
    /*
    Error: Couldn't find user with id: 48983038
        at Object.findById (/home/nick/bcit-cit/acit2520-web-app/week10/passportstarters_lecture/passportStarterCode/models/userModel.js:35:11)
        at Object.getUserById (/home/nick/bcit-cit/acit2520-web-app/week10/passportstarters_lecture/passportStarterCode/controllers/userController.js:13:24)
        at /home/nick/bcit-cit/acit2520-web-app/week10/passportstarters_lecture/passportStarterCode/middleware/passport.js:45:29
        at pass (/home/nick/bcit-cit/acit2520-web-app/week10/passportstarters_lecture/passportStarterCode/node_modules/passport/lib/authenticator.js:357:9)
        at Authenticator.deserializeUser (/home/nick/bcit-cit/acit2520-web-app/week10/passportstarters_lecture/passportStarterCode/node_modules/passport/lib/authenticator.js:362:5)
        at SessionStrategy.authenticate (/home/nick/bcit-cit/acit2520-web-app/week10/passportstarters_lecture/passportStarterCode/node_modules/passport/lib/strategies/session.js:60:10)
        at attempt (/home/nick/bcit-cit/acit2520-web-app/week10/passportstarters_lecture/passportStarterCode/node_modules/passport/lib/middleware/authenticate.js:366:16)
        at authenticate (/home/nick/bcit-cit/acit2520-web-app/week10/passportstarters_lecture/passportStarterCode/node_modules/passport/lib/middleware/authenticate.js:367:7)
        at Layer.handle [as handle_request] (/home/nick/bcit-cit/acit2520-web-app/week10/passportstarters_lecture/passportStarterCode/node_modules/express/lib/router/layer.js:95:5)
        at trim_prefix (/home/nick/bcit-cit/acit2520-web-app/week10/passportstarters_lecture/passportStarterCode/node_modules/express/lib/router/index.js:317:13)
    */

        // Login action:
          // login request for new time user:
            // Creates session for user


          // Github Database:
            // Login = Send dictionary of user profile upon login
            // Database sends back Authentication Confirmation
            // + sends back profile information
            

            // Our website database
              // Deserialized user = Checks database if user is in our DB


        // For new github user login:
          // No deserialized user on OUR database
          // github sends auth to server,
            // allow to send to OUR DB


  // Steps for solutions:
    // login button
      // L  Sends login information to Github DB
      // L  Github DB sends back information confirmed to login button
      // L  Also make Github DB send to OUR DB (To allow logn)

      // ISSUE:
        // NEW User is created in OUR DB 
        // Dont make Github reinsert existing user into OUR DB 
        // OUR database of logins must create new user if not exist
        // BUT does not recreate upon every other login


    // SOLUTION:
      // User.findOrCreate  <-- Method from passport.js






module.exports = passport.use(localLogin).use(githubLogin);
