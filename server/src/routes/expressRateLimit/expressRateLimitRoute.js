const express = require("express");
const router = express.Router();
const getExpressRateLimitPageData = require("../../controller/getExpressRateLimitPageData")
router.get("/expressRateLimit", getExpressRateLimitPageData);
module.exports = router;