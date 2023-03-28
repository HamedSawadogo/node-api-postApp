const express = require("express");
const { login, signUp } = require("../controllers/user.controller");
const router = express.Router();

router.get("/login", login);
router.post("/singUp", signUp);

module.exports = router;
