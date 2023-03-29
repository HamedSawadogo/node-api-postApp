const multer = require("multer");

const MINE_TYPES = {
  "image/jpg": "jpg",
  "image/png": "png",
  "image/jpeg": "jpeg",
};
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
    console.error(file);
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extensiion = MINE_TYPES[file.mimetype];
    console.error(name);
    callback(null, name + Date.now() + "." + extensiion);
  },
});

module.exports = multer({ storage }).single("image");
