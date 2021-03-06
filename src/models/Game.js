import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
  title: { type: String, required: "Title is None" },
  company: String,
  releaseDate: Number,
  platform: String,
  mainImg: String,
  genres: Array,
  link: { type: String, required: "Link is None" },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  videoIds: Array,
});

const model = mongoose.model("Game", GameSchema);
export default model;
