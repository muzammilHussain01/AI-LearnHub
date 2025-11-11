const { db } = require("../services/firebaseAdmin");

async function getAvailableLibraries(req, res) {
    try {
        const snapshot = await db.collection("libraryName").get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "No libraries found." });
        }

        const libraries = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json({
            success: true,
            data: libraries
        });
    } catch (e) {
        console.error("Error fetching libraries:", e);
        return res.status(500).json({
            message: "Internal server error."
        });
    }
}

module.exports = getAvailableLibraries;
