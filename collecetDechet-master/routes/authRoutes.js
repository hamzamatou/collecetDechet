const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Gestion de l'authentification
 */

// Web
router.get('/login', AuthController.pageLogin);
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);

// API
/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Connexion via API
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Connexion réussie avec token JWT
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 role:
 *                   type: string
 *       401:
 *         description: Email ou mot de passe invalide
 *       500:
 *         description: Erreur serveur
 */
router.post('/api/login', AuthController.apiLogin);

module.exports = router;
