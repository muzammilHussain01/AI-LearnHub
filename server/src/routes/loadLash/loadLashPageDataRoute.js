const express = require("express");
const router = express.Router();
const getLoadLashPageData = require("../../controller/getLoadLashPageData")
router.get("/loadLash", getLoadLashPageData);
module.exports = router;