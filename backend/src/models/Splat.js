import mongoose from "mongoose";

const splatSchema = new mongoose.Schema({
  id: {
    type: id,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  body: {
    type: String,
    required: true,
  },
  color: {
    // for hex 0x00FF00
    type: String,
    required: true,
  },
  xCoord: {
    // (x, y, z)
    type: Number,
    required: true,
  },
  yCoord: {
    // (x, y, z)
    type: Number,
    required: true,
  },
  zCoord: {
    // (x, y, z)
    type: Number,
    required: true,
  },
});

const Splat = mongoose.model("Splat", splatSchema);

export default Splat;
