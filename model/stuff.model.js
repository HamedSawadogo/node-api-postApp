const { model } = require("mongoose");
const mongooseD = require("mongoose");

const thingSchema = mongooseD.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  url: { type: String, required: true },
});
module.exports = model("thing", thingSchema);
