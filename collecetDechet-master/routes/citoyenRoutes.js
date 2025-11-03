const express = require('express');
const router = express.Router();
const CitoyenController = require('../controllers/CitoyenController');

// ====================
// Routes Web (EJS)
// ====================
router.get('/citoyen/:citoyenId/dashboard', CitoyenController.pageDashboard);
router.get('/citoyen/:citoyenId/dechets', CitoyenController.pageDechets);
router.post('/citoyen/:citoyenId/depot', CitoyenController.depotDechetWeb);

// ====================
// Routes API REST (Swagger inclus)
// ====================

/**
 * @swagger
 * /api/citoyen/{citoyenId}/depot:
 *   post:
 *     summary: Déposer un déchet
 *     tags: [Citoyen]
 *     parameters:
 *       - in: path
 *         name: citoyenId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               quantite:
 *                 type: number
 *               dateRencontre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Déchet déposé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.post('/api/citoyen/:citoyenId/depot', CitoyenController.depotDechetAPI);

/**
 * @swagger
 * /api/citoyen/{citoyenId}/dechets:
 *   get:
 *     summary: Obtenir les points et déchets d’un citoyen
 *     tags: [Citoyen]
 *     parameters:
 *       - in: path
 *         name: citoyenId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Données récupérées avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get('/api/citoyen/:citoyenId/dechets', CitoyenController.getDechetsAPI);

module.exports = router;
