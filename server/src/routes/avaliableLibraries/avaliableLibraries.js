const express = require("express");
const router = express.Router();
const avaliableLibrariesController = require("../../controller/avaliableLibraries")
router.post("/avaliableLibraries", avaliableLibrariesController);
module.exports = router;