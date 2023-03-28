const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(
      "mongodb+srv://kerb418:x566myzhnGGvl9GN@cluster0.ozspr6g.mongodb.net/stuffProject",
      () => console.log("Mongo connecté")
    );
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
