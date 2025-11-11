const express = require("express");
const router = express.Router();
const getCommunityPage = require("../../controller/getCommunityPage")
router.get("/community", getCommunityPage);
module.exports = router;