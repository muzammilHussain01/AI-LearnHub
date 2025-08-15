const express = require("express");
const router = express.Router();
const getHomePageCardData = require("../../controller/getHomePageCardData")
router.get("/homepageCard", getHomePageCardData);
module.exports = router;