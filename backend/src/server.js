import express from "express";
import router from "./routes/splatRoutes.js";

const app = express();

app.use("/api/splats", router);

app.listen(5000, () => {
  console.log("this is the start of the splat board backend");
});
