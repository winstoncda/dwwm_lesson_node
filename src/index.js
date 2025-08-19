import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json("TEST APPLICATION");
});

app.listen(PORT, () => {
  console.log(`Le serveur est démarré sur le port ${PORT}`);
  connectDB();
});
