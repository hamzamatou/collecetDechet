// services/BaremeService.js

class BaremeService {
    static async getBaremes() {
        return [
            { id: 1, typeDechet: "Plastique", pointsParKg: 2 },
            { id: 2, typeDechet: "Verre", pointsParKg: 1 },
            { id: 3, typeDechet: "Papier", pointsParKg: 1.5 },
        ];
    }

    static async addBareme(data) {
        return { message: "Barème ajouté avec succès", bareme: data };
    }

    static async updateBareme(id, data) {
        return { message: `Barème ${id} mis à jour`, updated: data };
    }

    static async deleteBareme(id) {
        return { message: `Barème ${id} supprimé` };
    }
}

module.exports = BaremeService;
