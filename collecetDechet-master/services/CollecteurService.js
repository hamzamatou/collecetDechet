class CollecteurService {
  static collecteurs = [
    { id: 1, nom: "Mohamed Ali", email: "ali@gmail.com", zone: "Borj Louzir" },
    { id: 2, nom: "Sami Trabelsi", email: "sami@gmail.com", zone: "La Marsa" },
  ];

  static async ajouterCollecteur(data) {
    const nouveau = { id: this.collecteurs.length + 1, ...data };
    this.collecteurs.push(nouveau);
    return nouveau;
  }

  static async getAllCollecteurs() {
    return this.collecteurs;
  }

  static async getCollecteurById(id) {
    const collecteur = this.collecteurs.find(c => c.id === parseInt(id));
    if (!collecteur) throw new Error("Collecteur non trouvé");
    return collecteur;
  }

  static async updateCollecteur(id, data) {
    const index = this.collecteurs.findIndex(c => c.id === parseInt(id));
    if (index === -1) throw new Error("Collecteur non trouvé");
    this.collecteurs[index] = { ...this.collecteurs[index], ...data };
    return this.collecteurs[index];
  }

  static async deleteCollecteur(id) {
    const index = this.collecteurs.findIndex(c => c.id === parseInt(id));
    if (index === -1) throw new Error("Collecteur non trouvé");
    const removed = this.collecteurs.splice(index, 1);
    return removed[0];
  }

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

  static async accepterDemande(demandeId) {
    return {
      message: `✅ La demande ${demandeId} a été acceptée avec succès.`,
      collecte: { id: demandeId, statut: "acceptée", dateCollecte: "2025-11-02" },
    };
  }

  static async rapporterCollecte(collecteId, description) {
    return {
      message: `🚨 Rapport enregistré pour la collecte ${collecteId}.`,
      description,
      statut: "rapportée",
      dateRapport: new Date().toISOString(),
    };
  }

  static async majStatutCollecte(collecteId, statut) {
    return {
      message: `📦 Statut de la collecte ${collecteId} mis à jour : ${statut}`,
      collecte: { id: collecteId, statut, dateMaj: new Date().toISOString() },
    };
  }

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
