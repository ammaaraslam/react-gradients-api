var admin = require("firebase-admin");

var serviceAccount = require("../firebase-permissions.json");

// Initializing the Firebase app to use in the API.
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports = { admin, db };
