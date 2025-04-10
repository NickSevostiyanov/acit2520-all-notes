// const { ensureAuthenticated } = require("../middleware/checkAuth");
import express from "express";
import * as database from "../controller/postController";
const router = express.Router();

router.get("/list", async (req, res) => {
  // ⭐ TODO
  res.render("subs");
});

router.get("/show/:subname", async (req, res) => {
  // ⭐ TODO
  res.render("sub");
});

export default router;
