const express = require("express");
const router = express.Router();
const signupRoutes = require("./signup/signup");
const loginRoutes = require("./login/login");
const avaliableLibraries = require("./avaliableLibraries/avaliableLibraries")
const contactUs = require("./contactUs/contactUs")
const rateUs = require("./rateUs/rateUs")
const getAvailableLibraries = require("./avaliableLibraries/getAvaliableLibraries")
const ladderSteps = require("./ladderSteps/ladderSteps")
const getHomePageCardData = require("./homePageCardData/getHomePageCardData")
router.use("/mainRoute", signupRoutes);
router.use("/mainRoute", loginRoutes);
router.use("/mainRoute", avaliableLibraries);
router.use("/mainRoute", contactUs);
router.use("/mainRoute", getAvailableLibraries);
router.use("/mainRoute", rateUs);
router.use("/mainRoute", ladderSteps);
router.use("/mainRoute", getHomePageCardData);

module.exports = router;