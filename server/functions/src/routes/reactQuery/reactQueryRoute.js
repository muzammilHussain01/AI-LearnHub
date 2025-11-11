const express = require("express");
const router = express.Router();
const getReactQueryPageData = require("../../controller/getReactQueryPageData")
router.get("/reactQuery", getReactQueryPageData);
module.exports = router;