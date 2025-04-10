const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");

const router = express.Router();



// Paste in from passport-github2 passport strategy
// --------------------------------------------------------------
router.get(
  '/github',
  
  // tells browser to show popup for login info
  passport.authenticate('github', { scope: [ 'user:email' ] })

);


// Callback URL given to github
  // http://localhost/auth/github/callback

router.get(
  '/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });
// --------------------------------------------------------------


router.get("/login", forwardAuthenticated, (req, res) => res.render("login"));

// router.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/dashboard",
//     failureRedirect: "/auth/login",
//   })
// );

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
  }),
  (req, res) => {
    // Check the user's role
    if (req.user.role === "admin") {
      res.redirect("/adminDashboard");
    } else {
      res.redirect("/dashboard");
    }
  }
);


router.get("/logout", (req, res) => {
  req.session.refreshFlag = false; // Clear refresh script
  req.logout();
  res.redirect("/auth/login");
});


module.exports = router;
