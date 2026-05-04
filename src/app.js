import express from "express";
import { noteRouter } from "./routes/note.route.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

app.use("/notes", noteRouter);
console.log(path.join(__dirname, "..", "/public/index.html"));

app.use("*name", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));
});

export default app;
