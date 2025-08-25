const express = require("express");
const router = express.Router();
const getBootstrapIntroPageData = require("../../controller/getBootstrapIntroPageData")
router.get("/bootstrapIntro", getBootstrapIntroPageData);
module.exports = router;