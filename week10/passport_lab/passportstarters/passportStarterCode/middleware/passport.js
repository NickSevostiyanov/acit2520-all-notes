const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { userModel } = require("../models/userModel");

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    (email, password, done) => {
      try {
        const user = userModel.findOne(email);
        if (user.password !== password) {
          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  try {
    const user = userModel.findById(id);
    console.log("Deserialized User:", user); // Ensure role is included
    done(null, user);
  } catch (err) {
    done(err);
  }
});


module.exports = passport;
