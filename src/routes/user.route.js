import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("TEST USER");
});

export default router;

// http://localhost:5000/user
