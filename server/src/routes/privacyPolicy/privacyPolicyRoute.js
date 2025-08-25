const express = require("express");
const router = express.Router();
const getPrivacyPolicyPageData = require("../../controller/getPrivacyPolicyPageData")
router.get("/privacy-policy", getPrivacyPolicyPageData);
module.exports = router;