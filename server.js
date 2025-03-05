const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true
}).then(() => console.log("MongoDB connecté"))
    .catch(err => console.log(err));

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0xaviOTRPSXeFh2_AWxbad_6J4f5aZKA",
  authDomain: "test-b12be.firebaseapp.com",
  projectId: "test-b12be",
  storageBucket: "test-b12be.firebasestorage.app",
  messagingSenderId: "476177926050",
  appId: "1:476177926050:web:ff35b338ff5f669c9254fb",
  measurementId: "G-MFBX8T6MJC"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

// Routes
app.use('/articles', require('./routes/articleRoutes'));
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
