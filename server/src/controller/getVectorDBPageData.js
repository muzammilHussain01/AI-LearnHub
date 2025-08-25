const { db } = require("../services/firebaseAdmin");

async function getVectorDbPageData(req, res) {
    console.log("getVectorDbPageData api is calling.")
    try {
        const snapshot = await db.collection("website-data")
            .where("page", "==", "vectorDbPageData")
            .get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "No data found." });
        }

        const vectorDbPageData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json({
            success: true,
            data: vectorDbPageData
        });
    } catch (e) {
        console.error("Error fetching libraries:", e);
        return res.status(500).json({
            message: "Internal server error."
        });
    }
}

module.exports = getVectorDbPageData;
