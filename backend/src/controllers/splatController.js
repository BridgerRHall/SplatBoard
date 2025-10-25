// export const getAllSplats = (req, res) => {
//   res.send("This is the first res of the splatboard app");
// };

export async function getAllSplats(req, res) {
  res.status(200).send("This is the first res of the splatboard app");
}

export async function createSplat(req, res) {
  res.status(201).send("create splate called");
}

export async function updateSplat(req, res) {
  res.status(200).send("update splat called");
}
export async function deleteSplat(req, res) {
  res.status(200).send("delete splat called");
}
