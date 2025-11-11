const express = require("express");
const router = express.Router();
const getBootstrapStacksPageData = require("../../controller/getBootstrapStacksPageData")
router.get("/bootstrapStacksPage", getBootstrapStacksPageData);
module.exports = router;