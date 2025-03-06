const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;
const VERSION = process.env.VERSION || 'v1'

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true
}).then(() => console.log("MongoDB connecté"))
    .catch(err => console.log(err));

// Routes
app.use('/api/'+VERSION+'/articles', require('./routes/articleRoutes'))
    .use('/api/'+VERSION+'/users', require('./routes/userRoutes'));

app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
