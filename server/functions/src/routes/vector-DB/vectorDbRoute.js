const express = require("express");
const router = express.Router();
const getVectorDBPageData = require("../../controller/getVectorDBPageData")
router.get("/vector-DB", getVectorDBPageData);
module.exports = router;