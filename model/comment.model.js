const mongooseD = require("mongoose");
const { model } = require("mongoose");
const commentSchema = mongooseD.Schema(
  {
    message: { type: String, required: true },
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = model("messages", commentSchema);
