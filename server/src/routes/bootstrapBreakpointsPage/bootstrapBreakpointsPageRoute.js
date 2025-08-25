const express = require("express");
const router = express.Router();
const getbootstrapBreakpointsPageData = require("../../controller/getbootstrapBreakpointsPageData")
router.get("/bootstrapBreakpointsPage", getbootstrapBreakpointsPageData);
module.exports = router;