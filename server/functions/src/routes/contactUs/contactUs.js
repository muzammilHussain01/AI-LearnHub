const express = require("express");
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minutes
    limit: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
    // store: ... , // Redis, Memcached, etc. See below.
})
const router = express.Router();
const contactUs = require("../../controller/contactUs")
router.post("/contactUs", limiter, contactUs);
module.exports = router;