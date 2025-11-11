const express = require("express");
const router = express.Router();
const getBootstrapGridPageData = require("../../controller/getBootstrapGridPageData")
router.get("/bootstrapGridPage", getBootstrapGridPageData);
module.exports = router;