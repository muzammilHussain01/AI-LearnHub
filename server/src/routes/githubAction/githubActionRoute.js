const express = require("express");
const router = express.Router();
const getGithubActionPageData = require("../../controller/getGithubActionPageData")
router.get("/githubAction", getGithubActionPageData);
module.exports = router;