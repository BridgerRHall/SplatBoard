const express = require("express");

const app = express();

app.listen(5000, () => {
  console.log("this is the start of the splat board backend");
});

app.get("/api/splats", (req, res) => {
  res.send("This is the first res of the splatboard app");
});
