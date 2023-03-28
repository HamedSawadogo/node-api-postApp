const multer = require("multer");

const MINE_TYPE = {
  "images/jpg": "jpg",
  "images/png": "png",
  "images/jpeg": "jpeg",
};
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extensiion = MINE_TYPE[file.mimetype];
    callback(name + new Date().getTime() + "." + extensiion);
  },
});

module.exports = multer({ storage }).single("image");
