const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");

const router = express.Router();

router.get("/login", forwardAuthenticated, (req, res) => res.render("login"));

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.redirect("/auth/login");

    req.logIn(user, (err) => {
      if (err) return next(err);

      console.log(`User role after login: ${user.role}`); // Debugging role

      if (user.role === "admin") {
        return res.redirect("/admin");
      } else {
        return res.redirect("/dashboard");
      }
    });
  })(req, res, next);
});



router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/auth/login");
});

module.exports = router;
