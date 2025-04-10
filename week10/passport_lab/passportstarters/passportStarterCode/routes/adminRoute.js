const express = require("express");
const { ensureAuthenticated, ensureAdmin } = require("../middleware/checkAuth");
const router = express.Router();

// Admin dashboard route
router.get("/", ensureAuthenticated, ensureAdmin, (req, res) => {
  const sessions = [];

  req.sessionStore.all((err, storedSessions) => {
    if (err) return res.status(500).send("Error retrieving sessions.");

    // Extract user session information
    for (const [sessionId, sessionData] of Object.entries(storedSessions)) {
      if (sessionData.passport?.user) {
        sessions.push({
          sessionId,
          userId: sessionData.passport.user,
        });
      }
    }

    res.render("admin", { user: req.user, sessions });
  });
});

// Revoke a session route
router.post("/revoke", ensureAuthenticated, ensureAdmin, (req, res) => {
  const sessionId = req.body.sessionId;

  req.sessionStore.destroy(sessionId, (err) => {
    if (err) {
      return res.status(500).send("Error revoking session.");
    }
    res.redirect("/admin");
  });
});

module.exports = router;
