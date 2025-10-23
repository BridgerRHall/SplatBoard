const express = require("express");
const splatRoutes = require(".splatRoutes.js");

const app = express();

app.use("/api/splats", splatRoutes);

app.listen(5000, () => {
  console.log("this is the start of the splat board backend");
});
