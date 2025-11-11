const { db } = require("../services/firebaseAdmin");

async function getBootstrapBreakpointsPageData(req, res) {
    console.log("getBootstrapBreakpointsPageData api is calling.")
    try {
        const snapshot = await db.collection("website-data")
            .where("page", "==", "bootstrapBreakpointsPageData")
            .get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "No data found." });
        }

        const bootstrapBreakpointsPageData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json({
            success: true,
            data: bootstrapBreakpointsPageData
        });
    } catch (e) {
        console.error("Error fetching libraries:", e);
        return res.status(500).json({
            message: "Internal server error."
        });
    }
}

module.exports = getBootstrapBreakpointsPageData;
