import "dotenv/config";
import path from "path";
import express from "express";
import * as dotenv from "dotenv";
import router from "./routes/splatRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

connectDB();

//middleware
app.use(express.json());

app.use("/api/splats", router);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  console.log("this is the start of the splat board backend");
});
