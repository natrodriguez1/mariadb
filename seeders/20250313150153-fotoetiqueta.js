'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let [fotos, fotos_metadata] = await queryInterface.sequelize.query('SELECT id FROM fotos')
    let [etiquetas, etiquetas_metadata] = await queryInterface.sequelize.query('SELECT id FROM etiquetas')
    await queryInterface.bulkInsert('fotoetiquetas', [
      { foto_id: fotos[0].id, etiqueta_id: etiquetas[4].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[1].id, etiqueta_id: etiquetas[3].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[1].id, etiqueta_id: etiquetas[7].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[2].id, etiqueta_id: etiquetas[1].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[2].id, etiqueta_id: etiquetas[5].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[3].id, etiqueta_id: etiquetas[2].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[3].id, etiqueta_id: etiquetas[6].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[3].id, etiqueta_id: etiquetas[4].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[4].id, etiqueta_id: etiquetas[0].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[5].id, etiqueta_id: etiquetas[4].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[5].id, etiqueta_id: etiquetas[2].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[6].id, etiqueta_id: etiquetas[5].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[6].id, etiqueta_id: etiquetas[3].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[7].id, etiqueta_id: etiquetas[7].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[7].id, etiqueta_id: etiquetas[0].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[8].id, etiqueta_id: etiquetas[1].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[8].id, etiqueta_id: etiquetas[6].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[8].id, etiqueta_id: etiquetas[3].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[9].id, etiqueta_id: etiquetas[2].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[10].id, etiqueta_id: etiquetas[5].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[10].id, etiqueta_id: etiquetas[4].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[11].id, etiqueta_id: etiquetas[3].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[11].id, etiqueta_id: etiquetas[7].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[12].id, etiqueta_id: etiquetas[0].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[12].id, etiqueta_id: etiquetas[1].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[13].id, etiqueta_id: etiquetas[6].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[14].id, etiqueta_id: etiquetas[4].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[14].id, etiqueta_id: etiquetas[3].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[14].id, etiqueta_id: etiquetas[2].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[15].id, etiqueta_id: etiquetas[1].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[16].id, etiqueta_id: etiquetas[5].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[16].id, etiqueta_id: etiquetas[7].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[17].id, etiqueta_id: etiquetas[0].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[17].id, etiqueta_id: etiquetas[6].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[18].id, etiqueta_id: etiquetas[3].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[19].id, etiqueta_id: etiquetas[2].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[19].id, etiqueta_id: etiquetas[4].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[20].id, etiqueta_id: etiquetas[5].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[20].id, etiqueta_id: etiquetas[1].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[22].id, etiqueta_id: etiquetas[1].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[22].id, etiqueta_id: etiquetas[4].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[22].id, etiqueta_id: etiquetas[7].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[23].id, etiqueta_id: etiquetas[0].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[23].id, etiqueta_id: etiquetas[3].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[24].id, etiqueta_id: etiquetas[2].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[24].id, etiqueta_id: etiquetas[5].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[24].id, etiqueta_id: etiquetas[6].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[25].id, etiqueta_id: etiquetas[1].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[25].id, etiqueta_id: etiquetas[4].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[26].id, etiqueta_id: etiquetas[2].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[26].id, etiqueta_id: etiquetas[5].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[26].id, etiqueta_id: etiquetas[0].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[27].id, etiqueta_id: etiquetas[7].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[27].id, etiqueta_id: etiquetas[3].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[28].id, etiqueta_id: etiquetas[6].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[28].id, etiqueta_id: etiquetas[2].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[28].id, etiqueta_id: etiquetas[5].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[29].id, etiqueta_id: etiquetas[4].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[29].id, etiqueta_id: etiquetas[0].id, createdAt: new Date(), updatedAt: new Date() },

      { foto_id: fotos[30].id, etiqueta_id: etiquetas[1].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[30].id, etiqueta_id: etiquetas[3].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[30].id, etiqueta_id: etiquetas[7].id, createdAt: new Date(), updatedAt: new Date() }

    ], 
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fotoetiquetas', null, {});
  }
};
