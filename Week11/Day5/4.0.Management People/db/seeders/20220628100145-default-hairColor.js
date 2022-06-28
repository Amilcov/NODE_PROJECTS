'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('HairColors' , [
      { color: "Auburn", createdAt: '2019-04-12', updatedAt: '2019-04-12'},
      { color: "Black", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { color: "Blonde", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { color: "Brown", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { color: "Other", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { color: "Red", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { color: "White", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
    ])
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HairColors', null, {});
  }
};
