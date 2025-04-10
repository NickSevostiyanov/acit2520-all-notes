module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/auth/login");
  },
  forwardAuthenticated: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/dashboard");
  },
  ensureAdmin: function (req, res, next) {
    console.log("ensureAdmin Middleware User:", req.user); // Debugging user
    if (req.isAuthenticated() && req.user.role === "admin") {
        return next(); // Ensure this is reached
    }
    res.redirect("/admin");
},

};
