const express = require("express");
const router = express.Router();
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth");

// localhost:8081
router.get("/", (req, res) => {
  res.send("welcome");
});


// localhost:8081
router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    user: req.user,
  });
});

module.exports = router;
