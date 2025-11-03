const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Import controllers
const CitoyenController = require('./controllers/CitoyenController');
const CollecteurController = require('./controllers/CollecteurController');

// Monter les routes
app.use(CitoyenController.routes());
app.use(CollecteurController.routes());

app.listen(3000, () => console.log('Serveur démarré sur http://localhost:3000'));
