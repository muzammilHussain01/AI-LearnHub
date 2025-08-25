const express = require("express");
const router = express.Router();
const getTermsPageData = require("../../controller/getTermsPageData")
router.get("/terms-of-use", getTermsPageData);
module.exports = router;