'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Owners', [
      {firstName: 'Xenia', lastName: 'Princess', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Adriana', lastName: 'Smith', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Claudia', lastName: 'Roy', createdAt: new Date(), updatedAt: new Date()},
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Owners', 
      {name: ['Xenia', 'Adriana', 'Claudia']}
    )
  }
};
