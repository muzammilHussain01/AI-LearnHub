const express = require("express");
const router = express.Router();
const getHelmetPageData = require("../../controller/getHelmetPageData")
router.get("/helmet", getHelmetPageData);
module.exports = router;