const validator = require("validator");
const {db} = require("../services/firebaseAdmin");
async function contactUs (req, res) {
    console.log("contactUs api is calling.");
    try {
        const {firstName, lastName, email, phone, message} = req.body;
        if (
            !firstName || typeof firstName !== "string" || firstName.length < 2 ||
            !lastName || typeof lastName !== "string" || lastName.length < 2 ||
            !email || !validator.isEmail(email) ||
            !phone || !validator.isMobilePhone(phone) ||
            !message
        ) {
            return res.status(400).json({
                message: "Missing or invalid parameter."
            })
        }
        const existing = await db.collection("user-query")
            .where("email", "==", email)
            .where("message", "==", message)
            .get();

        if (!existing.empty) {
            return res.status(409).json({
                message: "Duplicate query already submitted."
            });
        }
        const userQuery = {firstName, lastName, email, phone, message, date: new Date().toISOString()};
       const savedQuery =  await db.collection("user-query").add(userQuery);
       return res.status(201).json({
           message: "Query saved successfully"
       })
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Internal server error",
            error: e.message
        })
    }

}
module.exports = contactUs;