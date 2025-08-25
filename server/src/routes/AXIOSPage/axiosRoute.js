const express = require("express");
const router = express.Router();
const getAxiosPageData = require("../../controller/getAxiosPageData")
router.get("/axios", getAxiosPageData);
module.exports = router;