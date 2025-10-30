import express from "express";
import router from "./routes/splatRoutes.js";
import connectDB from "./config/db.js";
import * as dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT;

connectDB();
app.use("/api/splats", router);

app.listen(port, () => {
  console.log("this is the start of the splat board backend");
});
