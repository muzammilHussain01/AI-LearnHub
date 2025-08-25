const express = require("express");
const router = express.Router();
const getValidatorPageData = require("../../controller/getValidatorPageData")
router.get("/validator", getValidatorPageData);
module.exports = router;