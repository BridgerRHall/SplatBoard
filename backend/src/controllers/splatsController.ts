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
    console.error("Error in getAllsplats in splatController", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createSplat(req: Request, res: Response) {
  try {
    const { title, body, color, coords } = req.body;
    const newSplat = new Splat({ title, body, color, coords });
    await newSplat.save();
    res.status(201).json({ message: "Splat created succesfully" });
  } catch (error) {
    console.error("Error in createSplat in splatController", error);
    res.status(400).json({ message: "Internal server error" });
  }
}

export async function updateSplat(req: Request, res: Response) {
  try {
    const { title, body, color, coords } = req.body;
    const updatedSplat = await Splat.findByIdAndUpdate(
      req.params.id,
      {
        title,
        body,
        color,
        coords,
      },
      {
        new: true,
      }
    );
    if (!updatedSplat)
      return res.status(404).json({ message: "Splat not found" });
    res.status(200).json({ message: "update splat succesful" });
  } catch (error) {
    console.error("Error in updateSplat in splatController", error);
  }
}
export async function deleteSplat(req: Request, res: Response) {
  try {
    const deletedSplat = await Splat.findByIdAndDelete(req.params.id);
    if (!deletedSplat) {
      res.status(404).json({ message: "Splat not found" });
    }
    return res
      .status(200)
      .json({ message: "Splat deleted succesfully", data: deletedSplat });
  } catch (error) {
    console.error("Error in deleteSplat in splatController", error);
  }
}
