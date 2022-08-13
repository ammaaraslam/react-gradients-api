var admin = require("firebase-admin");

var serviceAccount = require("../firebase-permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports = { admin, db };
