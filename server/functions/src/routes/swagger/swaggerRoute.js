const express = require("express");
const router = express.Router();
const getSwaggerPageData = require("../../controller/getSwaggerPageData")
router.get("/swagger", getSwaggerPageData);
module.exports = router;