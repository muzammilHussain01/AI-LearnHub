const express = require("express");
const router = express.Router();
const getLadderSteps = require("../../controller/getLadderSteps")
router.get("/ladderSteps", getLadderSteps);
module.exports = router;