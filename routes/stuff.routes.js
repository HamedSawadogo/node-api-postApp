const express = require("express");
const auth = require("../middleswhere/auth");
const multer = require("../middleswhere/multer.config");
const {
  addStuff,
  getStuffs,
  deleteStuffs,
  getStuff,
  updateStuffs,
} = require("../controllers/stuff.controller");
const router = express.Router();

router.put("/:id", updateStuffs);
router.get("/", getStuffs);
router.get("/:id", getStuff);
router.post("/", multer, addStuff);
router.delete("/:id", auth, deleteStuffs);
module.exports = router;
