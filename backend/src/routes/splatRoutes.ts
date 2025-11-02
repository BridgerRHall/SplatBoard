import {
  getAllSplats,
  createSplat,
  deleteSplat,
  updateSplat,
} from "../controllers/splatsController.js";

import express from "express";

const router = express.Router();

//endpoints
router.get("/", getAllSplats);
router.post("/", createSplat);
router.put("/:id", updateSplat);
router.delete("/:id", deleteSplat);

export default router;
