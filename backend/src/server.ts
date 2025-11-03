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
//get access to req i.e. parse json bodyies
app.use(express.json());

//####### AUTH CHECK RATE LIMITING ############
//custom rate limiter with persistance using sliding window
//get access to req before api calls
app.use((req, res, next) => {
  console.log("middleware");
  next();
});

//direct api calls based on req body
app.use("/api/splats", router);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  console.log("this is the start of the splat board backend");
});
