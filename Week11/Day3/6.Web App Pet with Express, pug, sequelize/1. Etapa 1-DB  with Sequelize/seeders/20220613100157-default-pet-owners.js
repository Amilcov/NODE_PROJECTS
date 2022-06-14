'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('PetOwners', [
      {petId: 1, ownerId: 2, createdAt: new Date(),updatedAt: new Date() },
      {petId: 2, ownerId: 2, createdAt: new Date(),updatedAt: new Date() },
      {petId: 2, ownerId: 3, createdAt: new Date(),updatedAt: new Date() },
      {petId: 3, ownerId: 1, createdAt: new Date(),updatedAt: new Date() },
      {petId: 4, ownerId: 1, createdAt: new Date(),updatedAt: new Date() },
      {petId: 4, ownerId: 2, createdAt: new Date(),updatedAt: new Date() },
      {petId: 4, ownerId: 3, createdAt: new Date(),updatedAt: new Date() },
    ])
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('PetOwners', {
     petId: [1, 2, 3]
   })
  }
};
