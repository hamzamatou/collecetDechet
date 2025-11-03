const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const swaggerSetup = require('./swagger');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const CitoyenController = require('./controllers/CitoyenController');
const CollecteurController = require('./controllers/CollecteurController');
const AgentController = require('./controllers/AgentController');
const AuthController = require('./controllers/AuthController')

app.use(CitoyenController.routes());
app.use(CollecteurController.routes());
app.use(AgentController.routes());
app.use(AuthController.routes());
swaggerSetup(app);
app.listen(3000, () => console.log('Serveur démarré sur http://localhost:3000'));
