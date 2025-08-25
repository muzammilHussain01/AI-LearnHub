const express = require("express");
const router = express.Router();
const getMongoDbPageData = require("../../controller/getMongoDbPageData")
router.get("/mongoDb", getMongoDbPageData);
module.exports = router;