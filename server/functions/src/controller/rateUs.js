const validator = require("validator");
const { db } = require("../services/firebaseAdmin");

async function rateUs(req, res) {
    console.log("rateUs API is calling...");

    try {
        const { ratingStars, feedbackMessage, email, name } = req.body;

        // Basic validation
        if (
            !ratingStars || typeof ratingStars !== "number" || ratingStars < 1 || ratingStars > 5 ||
            !feedbackMessage || typeof feedbackMessage !== "string" || feedbackMessage.length < 2 ||
            !email || !validator.isEmail(email) ||
            !name || typeof name !== "string" || name.length < 2
        ) {
            return res.status(400).json({
                message: "Missing or invalid parameter."
            });
        }

        // Construct payload
        const ratingData = {
            ratingStars,
            feedbackMessage,
            email,
            name,
            createdAt: new Date().toISOString()  // Optional timestamp
        };

        // Save to Firestore
        const savedDoc = await db.collection("rating").add(ratingData);

        // Respond to client
        return res.status(201).json({
            message: "Thank you for your feedback!",
            ratingId: savedDoc.id,
            data: ratingData
        });
    } catch (e) {
        console.error("Error in rateUs API:", e);
        return res.status(500).json({
            message: "Internal server error.",
            error: e.message
        });
    }
}

module.exports = rateUs;
