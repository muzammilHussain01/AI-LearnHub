const express = require("express");
const router = express.Router();
const getColorAndFontStyleData = require("../../controller/getColorAndFontStyleData")
router.get("/color-font", getColorAndFontStyleData);
module.exports = router;