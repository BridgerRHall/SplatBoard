import type { Request, Response } from "express";

// export const getAllSplats = (req, res) => {
//   res.send("This is the first res of the splatboard app");
// };

export async function getAllSplats(req: Request, res: Response) {
  res.status(200).send("This is the first res of the splatboard app");
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
