const { db } = require("../services/firebaseAdmin");

async function getLadderSteps(req, res) {
    try {
        const snapshot = await db
            .collection("website-data")
            // .where("page", "==", "homeLadderData")
            // .orderBy("id", "asc")
            .get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "No data found." });
        }

        const ladderSteps = snapshot.docs.map(doc => ({
            docId: doc.id,
            ...doc.data()
        }));

        return res.status(200).json({
            success: true,
            data: ladderSteps
        });
    } catch (e) {
        console.error("Error fetching ladder steps:", e);
        return res.status(500).json({
            message: "Internal server error."
        });
    }
}

module.exports = getLadderSteps;
