'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sauces', [
      {"name": "Alfredo", "color": "white", "createdAt": new Date(), "updatedAt": new Date()},
      {"name": "Bolognese", "color": "red", "createdAt": new Date(), "updatedAt": new Date()},
      {"name": "Cheesy Bechamel", "color": "white", "createdAt": new Date(), "updatedAt": new Date()},
      {"name": "Garlic Soy", "color": "brown", "createdAt": new Date(), "updatedAt": new Date()},
      {"name": "Brown Butter Sage", "color": "brown", "createdAt": new Date(), "updatedAt": new Date()},
      {"name": "Red Chili Broth", "color": "red", "createdAt": new Date(), "updatedAt": new Date()}
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sauces', {});
     
  }
};
