const express = require("express");
const router = express.Router();
const getAvaliableLibraries = require("../../controller/getAvaliableLibraries")
router.get("/getAvailableLibraries", getAvaliableLibraries);
module.exports = router;