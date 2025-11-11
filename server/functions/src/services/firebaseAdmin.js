var admin = require("firebase-admin");

var serviceAccount = require("./firebaseConfig.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
module.exports = {admin, db};