const express = require("express");
const router = express.Router();
const getPineconePageData = require("../../controller/getPineconePageData")
router.get("/pinecone", getPineconePageData);
module.exports = router;