const express = require("express");
const router = express.Router();
const rateUs = require("../../controller/rateUs")
router.post("/rateUs", rateUs);
module.exports = router;