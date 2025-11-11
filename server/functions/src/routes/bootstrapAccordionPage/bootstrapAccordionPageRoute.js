const express = require("express");
const router = express.Router();
const getBootstrapAccordionPage = require("../../controller/getBootstrapAccordionPage")
router.get("/bootstrapAccordionPage", getBootstrapAccordionPage);
module.exports = router;