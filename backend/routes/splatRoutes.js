const express = require("express");

const router = express.Router();

//endpoints
router.get("/", (req, res) => {
  res.send("This is the first res of the splatboard app");
});

router.put("/:id", (req, res) => {
  res.status(201).send("splat updated succesfully");
});

router.post("/", (req, res) => {
  res.status(201).send("splat added succesfully");
});

router.delete("/:id", (req, res) => {
  res.status(201).send("splat deleted succesfully");
});

export default router;
