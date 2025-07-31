const validator = require("validator");
const {db} = require("../services/firebaseAdmin");
const bcrypt = require("bcrypt")

async function signup(req, res) {
    console.log("Signup API is calling.");
    try {
        const { firstName, lastName, email, password, phoneNumber } = req.body;
        if (
            !firstName ||
            typeof firstName !== "string" ||
            !validator.isLength(firstName.trim(), { min: 3, max: 50 }) ||
            !validator.isAlpha(firstName.trim(), 'en-US', { ignore: " -'" }) ||

            !lastName ||
            typeof lastName !== "string" ||
            !validator.isLength(lastName.trim(), { min: 3, max: 50 }) ||
            !validator.isAlpha(lastName.trim(), 'en-US', { ignore: " -'" }) ||

            !email ||
            !validator.isEmail(email.trim()) ||

            !password ||
            !validator.isStrongPassword(password, {
                minLength: 12,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1
            }) ||

            !phoneNumber ||
            typeof phoneNumber !== "string" ||
            phoneNumber.trim().length !== 10 ||
            !validator.isMobilePhone(phoneNumber.trim(), 'en-IN')
        ) {
            return res.status(400).json({
                message: "One or more fields are missing or invalid."
            });
        }

        const userSnapshot = await db.collection("users")
            .where("email", "==", email)
            .get();

        if (!userSnapshot.empty) {
            return res.status(409).json({
                message: "User already exists."
            });
        }
        const hashedPassword =await bcrypt.hash(password, 10);

        const user = { firstName, lastName, email, password:hashedPassword, phoneNumber, createdAt: new Date().toISOString() };
        await db.collection("users").add(user);

        return res.status(201).json({
            message: "Signup successful"
        });

    } catch (e) {
        console.error(e);
        return res.status(500).json({
            message: "Internal server error.",
            data: e.message
        });
    }
}

module.exports = signup;
