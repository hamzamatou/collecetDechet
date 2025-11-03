const express = require('express');
const router = express.Router();
const AgentController = require('../controllers/AgentController');

/**
 * @swagger
 * tags:
 *   name: Agent
 *   description: Gestion des agents, barèmes et collecteurs
 */

// ====================
// API Barèmes
// ====================

/**
 * @swagger
 * /api/agent/baremes:
 *   get:
 *     summary: Récupérer la liste de tous les barèmes
 *     tags: [Agent]
 *     responses:
 *       200:
 *         description: Liste des barèmes récupérée
 *       500:
 *         description: Erreur serveur
 */
router.get('/api/agent/baremes', AgentController.getBaremes);

/**
 * @swagger
 * /api/agent/baremes:
 *   post:
 *     summary: Ajouter un nouveau barème
 *     tags: [Agent]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               typeDechet:
 *                 type: string
 *               prixKg:
 *                 type: number
 *             example:
 *               typeDechet: "Plastique"
 *               prixKg: 5
 *     responses:
 *       201:
 *         description: Barème ajouté
 *       500:
 *         description: Erreur serveur
 */
router.post('/api/agent/baremes', AgentController.addBareme);

/**
 * @swagger
 * /api/agent/baremes/{id}:
 *   put:
 *     summary: Mettre à jour un barème existant
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du barème à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               typeDechet:
 *                 type: string
 *               prixKg:
 *                 type: number
 *             example:
 *               typeDechet: "Verre"
 *               prixKg: 3
 *     responses:
 *       200:
 *         description: Barème mis à jour
 *       500:
 *         description: Erreur serveur
 */
router.put('/api/agent/baremes/:id', AgentController.updateBareme);

/**
 * @swagger
 * /api/agent/baremes/{id}:
 *   delete:
 *     summary: Supprimer un barème
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du barème à supprimer
 *     responses:
 *       200:
 *         description: Barème supprimé
 *       500:
 *         description: Erreur serveur
 */
router.delete('/api/agent/baremes/:id', AgentController.deleteBareme);

// ====================
// API Collecteurs
// ====================

/**
 * @swagger
 * /api/agent/collecteurs:
 *   get:
 *     summary: Récupérer la liste de tous les collecteurs
 *     tags: [Agent]
 *     responses:
 *       200:
 *         description: Liste des collecteurs récupérée
 *       500:
 *         description: Erreur serveur
 */
router.get('/api/agent/collecteurs', AgentController.getCollecteurs);

/**
 * @swagger
 * /api/agent/collecteurs:
 *   post:
 *     summary: Ajouter un nouveau collecteur
 *     tags: [Agent]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               email:
 *                 type: string
 *               tel:
 *                 type: string
 *             example:
 *               nom: "Ali Ben"
 *               email: "ali@mail.com"
 *               tel: "12345678"
 *     responses:
 *       201:
 *         description: Collecteur ajouté
 *       500:
 *         description: Erreur serveur
 */
router.post('/api/agent/collecteurs', AgentController.addCollecteur);

/**
 * @swagger
 * /api/agent/collecteurs/{id}:
 *   put:
 *     summary: Mettre à jour un collecteur existant
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du collecteur à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               email:
 *                 type: string
 *               tel:
 *                 type: string
 *             example:
 *               nom: "Ahmed Salah"
 *               email: "ahmed@mail.com"
 *               tel: "98765432"
 *     responses:
 *       200:
 *         description: Collecteur mis à jour
 *       500:
 *         description: Erreur serveur
 */
router.put('/api/agent/collecteurs/:id', AgentController.updateCollecteur);

/**
 * @swagger
 * /api/agent/collecteurs/{id}:
 *   delete:
 *     summary: Supprimer un collecteur
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du collecteur à supprimer
 *     responses:
 *       200:
 *         description: Collecteur supprimé
 *       500:
 *         description: Erreur serveur
 */
router.delete('/api/agent/collecteurs/:id', AgentController.deleteCollecteur);
router.get('/agent/dashboard', AgentController.pageDashboard);
router.get('/agent/collecteurs', AgentController.pageCollecteurs);
router.post('/agent/baremes/update/:id', AgentController.updateBaremeWeb);
router.post('/agent/collecteurs/add', AgentController.addCollecteurWeb);

module.exports = router;
