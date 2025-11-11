const express = require("express");
const router = express.Router();
const getMermaidPageData = require("../../controller/getMermaidPageData")
router.get("/mermaid", getMermaidPageData);
module.exports = router;