const express = require("express");
const {
  addComment,
  getComments,
  deleteComment,
  updateComment,
  getComment,
} = require("../controllers/comment.controller");
const router = express.Router();

router.post("/", addComment);
router.get("/", getComments);
router.delete("/:id", deleteComment);
router.put("/", updateComment);
router.get("/:id", getComment);
module.exports = router;
