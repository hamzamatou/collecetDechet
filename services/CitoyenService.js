// services/CitoyenService.js

class CitoyenService {
    // Simule le dépôt d'un déchet
    static async deposerDechet(citoyenId, type, quantite) {
        return {
            id: Math.floor(Math.random() * 1000), // ID simulé pour le déchet
            citoyenId,
            type,
            quantite,
            dateDepot: new Date(),
            etat: 'en_attente' // ou 'collecte_en_cours', 'collecte_validee', etc.
        };
    }

    // Récupère les points, déchets et bons pour un citoyen
    static async getPointsEtDechets(citoyenId) {
        return {
            id: citoyenId,
            nom: 'Hamza', // Nom simulé
            points: 120,  // Points simulés
            dechets: [
                { id: 1, type: 'Plastique', quantite: 2, dateDepot: new Date(), etat: 'Planifié' },
                { id: 2, type: 'Cuivre', quantite: 1, dateDepot: new Date(), etat: 'collecte_validee' }
            ],
            bons: [
                { id: 1, valeur: 10, dateGeneration: new Date(), utilise: false },
                { id: 2, valeur: 20, dateGeneration: new Date(), utilise: true }
            ]
        };
    }
}

module.exports = CitoyenService;
