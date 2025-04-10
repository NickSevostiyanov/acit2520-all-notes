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
  isAdmin: function (req, res, next) {
    // Ensure the user is authenticated and has admin role
    if (req.user && req.user.role === "admin") {
      if (req.path === "/adminDashboard") {
        // Check refresh flag only for adminDashboard
        if (req.session.refreshFlag) {
          return res.status(403).send("Access Denied: Refresh detected.");
        }
        req.session.refreshFlag = true; // Set refresh flag
      }
      return next();
    }
    res.status(403).send("Access Denied: You do not have admin rights.");
  },
};
