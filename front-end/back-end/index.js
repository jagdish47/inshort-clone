import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";

const app = express();
app.use(cors());
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

app.use("/", Route);

const PORT = 8000;

Connection(username, password);

app.listen(PORT, () => {
  console.log(`Server is running successfully at Port:${PORT}`);
});

DefaultData();
