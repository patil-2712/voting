const express = require("express");
const upload = require("../config/multerConfig");
const registerUser = require("../controller/registercontroller");
const loginUser = require("../controller/logincontroller");

const router = express.Router();

router.post("/register", upload, registerUser);

router.post("/login", loginUser);

module.exports = router;
