const express = require("express");
const router = express.Router();
const signup = require("../../controller/signup"); // not destructured

router.post("/signup", signup); // Will respond to POST /api/signup

module.exports = router;
