const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const swaggerSetup = require('./swagger');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Vue EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Import des routes (séparées du controller)
const citoyenRoutes = require('./routes/citoyenRoutes');
const collecteurRoutes = require('./routes/collecteurRoutes');
const agentRoutes = require('./routes/agentRoutes');
const authRoutes = require('./routes/authRoutes'); // si tu veux suivre la même structure que Citoyen

// Utilisation des routes
app.use(citoyenRoutes);
app.use(collecteurRoutes);
app.use(agentRoutes);
app.use(authRoutes);

// Swagger
swaggerSetup(app);

// Lancement du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
