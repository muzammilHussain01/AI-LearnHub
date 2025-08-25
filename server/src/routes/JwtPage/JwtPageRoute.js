const express = require("express");
const router = express.Router();
const getJwtPageData = require("../../controller/getJwtPageData")
router.get("/jwt", getJwtPageData);
module.exports = router;