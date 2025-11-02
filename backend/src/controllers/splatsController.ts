import type { Request, Response } from "express";
import Splat from "../models/Splat.js";

// export const getAllSplats = (req, res) => {
//   res.send("This is the first res of the splatboard app");
// };

export async function getAllSplats(req: Request, res: Response) {
  try {
    const splats = await Splat.find();
    res.status(200).json(splats);
  } catch (error) {
    console.error("Error in getAllsplats in splatController");
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createSplat(req: Request, res: Response) {
  res.status(201).send("create splate called");
}

export async function updateSplat(req: Request, res: Response) {
  res.status(200).send("update splat called");
}
export async function deleteSplat(req: Request, res: Response) {
  res.status(200).send("delete splat called");
}
