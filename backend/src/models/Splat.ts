import mongoose from "mongoose";

const splatSchema = new mongoose.Schema({
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
  coords: {
    type: {
      x: {
        type: Number,
        required: true,
      },
      y: {
        type: Number,
        required: true,
      },
      z: {
        type: Number,
        required: true,
      },
    },
  },
});

const Splat = mongoose.model("Splat", splatSchema);

export default Splat;
