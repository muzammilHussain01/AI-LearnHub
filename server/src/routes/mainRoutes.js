const express = require("express");
const router = express.Router();
const signupRoutes = require("./signup/signup");
const loginRoutes = require("./login/login")

router.use("/mainRoute", signupRoutes);
router.use("/mainRoute", loginRoutes)

module.exports = router;
