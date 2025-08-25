const { db } = require("../services/firebaseAdmin");

async function avaliableLibraries(req, res) {
    console.log("avaliableLibraries api is calling.");
    try {
        const { contentData } = req.body;

        if (!Array.isArray(contentData)) {
            return res.status(400).json({ error: "contentData must be an array of objects" });
        }

        // Save each object in Firestore
        const savedDocs = [];
        for (const item of contentData) {
            const docRef = await db.collection("website-data").add(item); // ✅ save each object
            savedDocs.push({ id: docRef.id, ...item });
        }

        res.status(201).json({
            message: "Content data saved successfully",
            savedDocs
        });
    } catch (error) {
        console.error("Error saving contentData:", error);
        res.status(500).json({ error: "Failed to save contentData" });
    }
}

module.exports = avaliableLibraries;
