import express from "express";
import router from "./routes/splatRoutes.js";
import connectDB from "./config/db.js";

const app = express();

connectDB();
app.use("/api/splats", router);

app.listen(5000, () => {
  console.log("this is the start of the splat board backend");
});
