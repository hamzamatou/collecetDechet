class CollecteurService {

  // ======================================================
  // 🔹 1. Récupérer les demandes de collecte (mock)
  // ======================================================
  static async getDemandesCollecte() {
    return [
      {
        _id: "1",
        citoyenId: { nom: "Ali Ben Salah", email: "ali@gmail.com", adresse: "rue mostfa mohsen borjlouzir" },
        type: "Plastique",
        quantite: 3.5,
        statut: "en attente",
        dateRencontre: "2025-11-05",
      },
      {
        _id: "2",
        citoyenId: { nom: "Sara Gharbi", email: "sara@gmail.com", adresse: "hay nozha" },
        type: "Aluminium",
        quantite: 5.2,
        statut: "en attente",
        dateRencontre: "2025-11-07",
      },
    ];
  }

  // ======================================================
  // 🔹 2. Accepter une demande
  // ======================================================
  static async accepterDemande(demandeId) {
    return {
      message: `✅ La demande ${demandeId} a été acceptée avec succès.`,
      collecte: {
        id: demandeId,
        statut: "acceptée",
        dateCollecte: "2025-11-02",
      },
    };
  }

  // ======================================================
  // 🔹 3. Rapporter une collecte (simulation)
  // ======================================================
  static async rapporterCollecte(collecteId, description) {
    return {
      message: `🚨 Rapport enregistré pour la collecte ${collecteId}.`,
      description: description,
      statut: "rapportée",
      dateRapport: new Date().toISOString(),
    };
  }

  // ======================================================
  // 🔹 4. Mettre à jour le statut
  // ======================================================
  static async majStatutCollecte(collecteId, statut) {
    return {
      message: `📦 Statut de la collecte ${collecteId} mis à jour : ${statut}`,
      collecte: {
        id: collecteId,
        statut,
        dateMaj: new Date().toISOString(),
      },
    };
  }

  // ======================================================
  // 🔹 5. Historique du collecteur
  // ======================================================
  static async getHistorique(collecteurId) {
    return [
      {
        _id: "101",
        citoyen: { nom: "Ali Ben Salah", adresse: "rue mostfa mohsen borjlouzir" },
        typeDechet: "Plastique",
        quantite: 4.2,
        statut: "terminée",
        dateCollecte: "2025-10-29",
      },
      {
        _id: "102",
        citoyen: { nom: "Sara Gharbi", adresse: "hay nozha" },
        typeDechet: "Aluminium",
        quantite: 2.5,
        statut: "rapportée",
        dateCollecte: "2025-10-30",
      },
    ];
  }
}

module.exports = CollecteurService;
