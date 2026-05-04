import { configDotenv } from "dotenv";
import app from "./src/app.js";
import { connectToDB } from "./src/config/database.js";

configDotenv();
connectToDB();

app.listen(3000, () => {
  console.log("server stared at port 3000");
});
