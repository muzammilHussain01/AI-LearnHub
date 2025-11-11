const express = require("express");
const router = express.Router();
const getReduxToolKitData = require("../../controller/getReduxToolKitData")
router.get("/reduxToolKit", getReduxToolKitData);
module.exports = router;