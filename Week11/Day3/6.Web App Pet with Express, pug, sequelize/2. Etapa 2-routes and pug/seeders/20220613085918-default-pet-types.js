'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('PetTypes',[ 
      {type: 'dog', createdAt: new Date(), updatedAt: new Date()},
      {type: 'cat', createdAt: new Date(), updatedAt: new Date()},
      {type: 'panther', createdAt: new Date(), updatedAt: new Date()}
  ])
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('PetTypes', {
      type: ['dog','cat', 'panther']
   })
  }
};
