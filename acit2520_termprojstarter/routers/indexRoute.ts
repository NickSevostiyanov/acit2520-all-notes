import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  res.redirect("/posts");
});

export default router;
