'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pets', [
      {name: 'Azorel', petTypeId: 1, age: 2, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Miau', petTypeId: 2, age: 7, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Radix', petTypeId: 3, age: 2, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Stray', petTypeId: 1, age: 5, createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Pets', 
      {name: ['Azorel', 'Miau', 'Radix', 'Stray']}
    )
  }
};
