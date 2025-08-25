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
const getAxiosPageData = require("./AXIOSPage/axiosRoute")
const getJwtPageData = require("./JwtPage/JwtPageRoute")
const loadLashPageDataRoute = require("./loadLash/loadLashPageDataRoute")
const getValidatorPageDataRoute = require("./validatorPage/getValidatorPageDataRoute")
const expressRoute = require("./express/expressRoute")
const communityPageRoute = require("./community/communityPageRoute")
const corsRoute = require("./cors/corsRoute")
const reduxToolKitRoute = require("./reduxToolKit/reduxToolKitRoute")
const expressRateLimitRoute = require("./expressRateLimit/expressRateLimitRoute")
const helmetRoute = require("./helmet/helmetRoute")
const ColorAndFontRoute = require("./ColorAndFont/ColorAndFontRoute")
const termsOfUseRoute = require("./termsOfUse/termsOfUseRoute")
const privacyPolicyRoute = require("./privacyPolicy/privacyPolicyRoute")
const swaggerRoute = require("./swagger/swaggerRoute")
const githubActionRoute = require("./githubAction/githubActionRoute")
const reactQueryRoute = require("./reactQuery/reactQueryRoute")
const vectorDbRoute = require("./vector-DB/vectorDbRoute")
const pineconeRoute = require("./pinecone/pineconeRoute")
const mermaidRoute = require("./mermaid/mermaidRoute")
const mongoDbRoute = require("./mongoDb/mongoDbRoute")
const bootstrapIntroPageRoute = require("./bootstrapIntroPage/bootstrapIntroPageRoute")
const bootstrapBreakpointsPageRoute = require("./bootstrapBreakpointsPage/bootstrapBreakpointsPageRoute")
const bootstrapStacksPage = require("./bootstrapStacksPage/bootstrapStacksPage")
router.use("/mainRoute", signupRoutes);
router.use("/mainRoute", loginRoutes);
router.use("/mainRoute", avaliableLibraries);
router.use("/mainRoute", contactUs);
router.use("/mainRoute", getAvailableLibraries);
router.use("/mainRoute", rateUs);
router.use("/mainRoute", ladderSteps);
router.use("/mainRoute", getHomePageCardData);
router.use("/mainRoute", getAxiosPageData);
router.use("/mainRoute", getJwtPageData);
router.use("/mainRoute", loadLashPageDataRoute);
router.use("/mainRoute", getValidatorPageDataRoute);
router.use("/mainRoute", expressRoute);
router.use("/mainRoute", communityPageRoute);
router.use("/mainRoute", corsRoute);
router.use("/mainRoute", reduxToolKitRoute);
router.use("/mainRoute", expressRateLimitRoute);
router.use("/mainRoute", helmetRoute);
router.use("/mainRoute", ColorAndFontRoute);
router.use("/mainRoute", termsOfUseRoute);
router.use("/mainRoute", privacyPolicyRoute);
router.use("/mainRoute", swaggerRoute);
router.use("/mainRoute", githubActionRoute);
router.use("/mainRoute", reactQueryRoute);
router.use("/mainRoute", vectorDbRoute);
router.use("/mainRoute", pineconeRoute);
router.use("/mainRoute", mermaidRoute);
router.use("/mainRoute", mongoDbRoute);
router.use("/mainRoute", bootstrapIntroPageRoute);
router.use("/mainRoute", bootstrapBreakpointsPageRoute);
router.use("/mainRoute", bootstrapStacksPage);

module.exports = router;