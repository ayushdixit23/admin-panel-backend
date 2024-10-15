const serviceKey = require("./grovyo-89dc2-d7b296da1c78.json");
const admin = require("firebase-admin");

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceKey),
    databaseURL: "https://grovyo-89dc2.firebaseio.com",
  });
  console.log("Firebase Admin initialized successfully!");
} catch (error) {
  console.error("Firebase Admin initialization error:", error);
}

module.exports = admin;
