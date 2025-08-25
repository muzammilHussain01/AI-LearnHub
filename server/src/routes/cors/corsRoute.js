const express = require("express");
const router = express.Router();
const getCorsPageData = require("../../controller/getCorsPageData")
router.get("/cors", getCorsPageData);
module.exports = router;