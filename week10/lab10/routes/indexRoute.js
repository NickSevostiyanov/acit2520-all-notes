const express = require("express");
const router = express.Router();
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth");

router.get("/", (req, res) => {
  res.send("welcome");
});

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    user: req.user,
  });
});

// router.get("/session/:id/destroy", (req, res) => {
//   const is = req.params.id;
//   const store = req.sessionStore;
//   store.destroy(id, (err) => console.log("Destroyed!"));
// })


// From adminDashboard, destroy session ID 
router.post("/session/:id/destroy", ensureAuthenticated, isAdmin, (req, res) => {
  const sessionId = req.params.id;
  const store = req.sessionStore;

  store.destroy(sessionId, (err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).send("Internal Server Error");
    }
    console.log(`Session ${sessionId} destroyed`);
    res.redirect("/adminDashboard");
  });
});


// router.get("/adminDashboard", (req, res) => {
//   const store = req.sessionStore;
//   store.all((err, allSessions) => {
//     res.render("adminDashboard", { allSessions });
//   })
// })


router.get("/adminDashboard", ensureAuthenticated, isAdmin, (req, res) => {
  const store = req.sessionStore;

  store.all((err, allSessions) => {
    if (err) {
      console.error("Error fetching sessions:", err);
      return res.status(500).send("Internal Server Error");
    }

    const sessions = Object.keys(allSessions).map((sessionId) => {
      const sessionData = allSessions[sessionId];
      return {
        sessionId: sessionId,
        userId: sessionData.passport ? sessionData.passport.user : "Unknown",
      };
    });

    res.render("adminDashboard", { sessions });
  });
});


module.exports = router;
