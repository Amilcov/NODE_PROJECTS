'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Noodles', [
    { "name": "Linguini", "isStuffed": false, "createdAt": new Date(), "updatedAt": new Date()},
    { "name": "Fettucini", "isStuffed": false, "createdAt": new Date(), "updatedAt": new Date()},
    { "name": "Tortellini", "isStuffed": true, "createdAt": new Date(), "updatedAt": new Date()},
    { "name": "Ravioli", "isStuffed": true, "createdAt": new Date(), "updatedAt": new Date()},
    { "name": "Udon", "isStuffed": false, "createdAt": new Date(), "updatedAt": new Date()},
    { "name": "Ramen", "isStuffed": false, "createdAt": new Date(), "updatedAt": new Date()},
  ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Noodels', {})
  }
};
