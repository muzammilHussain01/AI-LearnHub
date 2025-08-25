const express = require("express");
const router = express.Router();
const getExpressPagedata = require("../../controller/getExpressPagedata")
router.get("/express", getExpressPagedata);
module.exports = router;