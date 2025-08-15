const {db} = require("../services/firebaseAdmin")
async function avaliableLibraries (req, res) {
    console.log("avaliableLibraries api is calling.");
    try {
        const {
            page,
            level,
            title,
            description,
            badge,
            button
        } = req.body;
        // if (!libraryName || typeof libraryName !== "string") {
        //     return res.status(400).json({
        //         message: "Invalid parameter"
        //     })
        // }
        await db.collection("website-data").add({
            page,
            level,
            title,
            description,
            badge,
            button
        });
       return res.status(201).json({
            message: "Data saved."
        })
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Internal server error."
        })
    }
}
module.exports = avaliableLibraries;