const validator = require("validator");
const {db} = require("../services/firebaseAdmin");
const bcrypt = require("bcrypt");
async function login (req, res) {
    console.log("Login api is calling.");
    try {
        const {email, password} = req.body;
        if (
            !email || !validator.isEmail(email) ||
            !password
        ) {
            return res.status(400).json({
                message: "Invalid credentials."
            })
        }
       const userSnapshot = await db.collection("users")
            .where("email", "==", email)
            .get();
        if (userSnapshot.empty) {
            return res.status(404).json({
                message: "User not found."
            })
        }
        const [userData] = userSnapshot.docs.map((doc)=>{
           return {doc_id:doc.id, ... doc.data()}
        });
        console.log("------>>>>>>>>", userData)
        const isPasswordValid = await bcrypt.compare(password, userData.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Credentials do not match."
            })
        }
        res.status(200).json({
            message: "Login successfull",
            data: userData
        })
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Internal server error.",
            data: e.message
        })
    }
}
module.exports = login;