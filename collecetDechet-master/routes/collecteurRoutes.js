// routes/collecteurRoutes.js
const express = require('express');
const router = express.Router();
const CollecteurController = require('../controllers/CollecteurController');
const { authenticate, authorizeRole } = require('../middlewares/auth');

/**
 * @swagger
 * tags:
 *   name: Collecteur
 *   description: Gestion des collecteurs et des collectes
 */

// ====================
// API Collecteur
// ====================

/**
 * @swagger
 * /api/collecteur/demandes:
 *   get:
 *     summary: Récupère toutes les demandes assignées au collecteur
 *     tags: [Collecteur]
 *     responses:
 *       200:
 *         description: Liste des demandes
 *       500:
 *         description: Erreur serveur
 */
router.get('/api/collecteur/demandes', CollecteurController.getDemandesCollecte);

/**
 * @swagger
 * /api/collecteur/{id}/accepter:
 *   post:
 *     summary: Accepte une demande
 *     tags: [Collecteur]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Demande acceptée
 *       500:
 *         description: Erreur serveur
 */
router.post('/api/collecteur/:id/accepter', CollecteurController.accepterDemande);

/**
 * @swagger
 * /api/collecteur/{id}/rapporter:
 *   post:
 *     summary: Rapporte une collecte
 *     tags: [Collecteur]
 *     parameters:
 *       - in: path
 *         name: id
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
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Collecte rapportée
 *       500:
 *         description: Erreur serveur
 */
router.post('/api/collecteur/:id/rapporter', CollecteurController.rapporterCollecte);

/**
 * @swagger
 * /api/collecteur/{id}/statut:
 *   put:
 *     summary: Met à jour le statut d'une collecte
 *     tags: [Collecteur]
 *     parameters:
 *       - in: path
 *         name: id
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
 *               statut:
 *                 type: string
 *     responses:
 *       200:
 *         description: Statut mis à jour
 *       500:
 *         description: Erreur serveur
 */
router.put('/api/collecteur/:id/statut', CollecteurController.majStatutCollecte);

/**
 * @swagger
 * /api/collecteur/{idCollecteur}/historique:
 *   get:
 *     summary: Récupère l'historique des collectes pour un collecteur
 *     tags: [Collecteur]
 *     parameters:
 *       - in: path
 *         name: idCollecteur
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Historique du collecteur
 *       500:
 *         description: Erreur serveur
 */
router.get('/api/collecteur/:idCollecteur/historique', CollecteurController.getHistorique);

// ====================
// Routes Web (EJS)
// ====================

router.get(
  '/collecteur/demandes',
  authenticate,
  authorizeRole('collecteur'),
  CollecteurController.pageDemandes
);

router.get(
  '/collecteur/:idCollecteur/historique',
  authenticate,
  authorizeRole('collecteur'),
  CollecteurController.pageHistorique
);

router.post(
  '/collecteur/:id/accepter',
  authenticate,
  authorizeRole('collecteur'),
  CollecteurController.accepterDemandeWeb
);

router.post(
  '/collecteur/:id/rapporter',
  authenticate,
  authorizeRole('collecteur'),
  CollecteurController.rapporterCollecteWeb
);

module.exports = router;
