'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     return await queryInterface.bulkInsert('Parks', [
      { parkName: 'Central Park', 
        city: 'Manhattan', 
        provinceState: 'NY', 
        country: 'USA', 
        opened: new Date(1858, 6, 20), 
        size: '3.41 sqm', 
        description: 'Biggest Park of NY', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }]
      )},

  async down (queryInterface, Sequelize) {
   return await queryInterface.bulkDelete('Parks', {});
  }
};



// module.exports = {
//   async up (queryInterface, Sequelize) {
//     return queryInterface.bulkInsert('Owners', [
//       {firstName: 'Xenia', lastName: 'Princess', createdAt: new Date(), updatedAt: new Date()},
//       {firstName: 'Adriana', lastName: 'Smith', createdAt: new Date(), updatedAt: new Date()},
//       {firstName: 'Claudia', lastName: 'Roy', createdAt: new Date(), updatedAt: new Date()},
//     ])
//   },

//   async down (queryInterface, Sequelize) {
//     return queryInterface.bulkDelete('Owners', 
//       {name: ['Xenia', 'Adriana', 'Claudia']}
//     )
//   }
// };